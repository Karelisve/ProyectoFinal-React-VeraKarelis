import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Checkout.css'

function Checkout() {
  const { cart, total } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

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
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.nombre}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group controlId="city">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleFormChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="zip">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Button className='boton-submit' type="submit">
                  Realizar Pedido
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;