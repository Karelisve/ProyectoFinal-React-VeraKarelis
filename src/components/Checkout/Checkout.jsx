import React, { useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Checkout.css'

function Checkout() {
  const { cart, total } = useContext(CartContext);


  return (
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
            <Form>
            <Form.Group className="form-group">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" required className="ph"/>
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu apellido" required className="ph"/>
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" required className="ph" />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Confirmación de Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo " required className="ph" />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu dirección" required className="ph"/>
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu ciudad" required className="ph"/>
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Código Postal </Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu código postal" required className="ph"/>
            </Form.Group>
           
            <div className="boton-form-contacto">
            <Button type="submit" className="boton-pedido">
              Realizar Pedido
            </Button>
            </div>
          </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;