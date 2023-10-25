import React from "react";
import './Contacto.css'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import { Container } from "react-bootstrap";


function Contacto() {
    return (
        <Container>
          <h1 className="titulo-contacto">Contacto</h1>
          <p className="parrafo-titulo">¡Gracias por visitar nuestra tienda en línea de plantas! Estamos aquí para ayudarte. Si tienes alguna pregunta, comentario o solicitud especial, no dudes en ponerte en contacto con nosotros a través del siguiente formulario. Estaremos encantados de atenderte.</p>
          <Form>
            <Form.Group controlId="formBasicName" className="form-group">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" required className="ph"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-group">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" required className="ph" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage" className="form-group">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje" required className="ph" />
            </Form.Group >
            <div className="boton-form-contacto">
            <Button type="submit" className="form-group-button">
              Enviar
            </Button>
            </div>
          </Form>
        </Container>
      );
    };
export default Contacto;