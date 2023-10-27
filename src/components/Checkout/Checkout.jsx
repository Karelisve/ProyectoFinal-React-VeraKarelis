import React, { useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Checkout.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../servicio/firebase'

function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [user, setUser] = useState({})
  const [validateEmail, setValidateEmail] = useState('')
  const [orderId, setOrderId] = useState('')

  const datosCompra = (e) => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  const realizarCompra =(e) => {
    e.preventDefault()
    if(!user.name && !user.lastname) {
      alert('Complete los campos para continuar')
    } else {
      let order = {
        user,
        item:cart,
        total:total,
        date:serverTimestamp()
      }
      const venta = collection(db, 'orders')
      addDoc(venta, order)
      .then((res) => {
        setOrderId(res.id)
        clearCart()
      })
      .catch((error) => console.log(error))
    }
  }



  return (
    <div>
      {orderId !== ''
        ?<div>
          <h1>¡Gracias por tu compra en Potus Tienda!</h1>
          <h2>Su id de seguimiento es: {orderId}</h2>
        </div>
        : 
        <Container>
        <Row>
          <Col md={6}>
              <Card className='checkout'>
                  <Card.Header className='titulo-checkout'>Detalle de Compra</Card.Header>
                  <Card.Body>
                  <ul className='detalle-compra-lista'>
                      {cart.map((item) => (
                      <li key={item.id} className='detalle-compra-item'>
                          <span className='detalle-compra-nombre'>
                          {item.nombre} - {item.quantity} ud
                          </span>
                          <span className='detalle-compra-precio'>
                          ${item.precio * item.quantity}
                          </span>
                      </li>
                      ))}
                  </ul>
                  <p className='detalle-compra-total'><span className='total-text'> Total: ${total}</span></p>
                  </Card.Body>
              </Card>
          </Col>
  
          <Col md={6}>
            <Card className='checkout'>
              <Card.Header className='titulo-checkout'>Información de Entrega</Card.Header>
              <Card.Body>
              <Form onSubmit={realizarCompra}>
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Nombre</Form.Label>
                <Form.Control type="text" name='name' onChange={datosCompra} placeholder="Ingresa tu nombre" required className="placeh"/>
              </Form.Group>
  
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Apellido</Form.Label>
                <Form.Control type="text" name='lastname' onChange={datosCompra} placeholder="Ingresa tu apellido" required className="placeh"/>
              </Form.Group>
  
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Email</Form.Label>
                <Form.Control type="email" name='email' onChange={datosCompra} placeholder="Ingresa tu correo" required className="placeh" />
              </Form.Group>
  
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Confirmación de Email</Form.Label>
                <Form.Control type="email" name='email'  onChange={((e) => setValidateEmail(e.target.value))} placeholder="Ingresa tu correo " required className="placeh" />
              </Form.Group>
  
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Dirección</Form.Label>
                <Form.Control type="text" name='addres' onChange={datosCompra} placeholder="Ingresa tu dirección" required className="placeh"/>
              </Form.Group>
  
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Ciudad</Form.Label>
                <Form.Control type="text" name='city' onChange={datosCompra} placeholder="Ingresa tu ciudad" required className="placeh"/>
              </Form.Group>
  
              <Form.Group className="form-grupo">
                <Form.Label className='label'>Código Postal </Form.Label>
                <Form.Control type="number" name='postal' onChange={datosCompra} placeholder="Ingresa tu código postal" required className="placeh"/>
              </Form.Group>
             
              <div className="boton-form-check">
              <Button type="submit" disabled={validateEmail !== user.email} className="form-grupo-button">
                Realizar Pedido
              </Button>
              </div>
            </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default Checkout;


