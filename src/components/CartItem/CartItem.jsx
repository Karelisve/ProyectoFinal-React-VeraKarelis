import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import './CartItem.css'

const CartItem = ({ id, nombre, precio, quantity, img }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const addToCart = () => {
    addItem({ id, nombre, precio, img }, 1);
  };

  const removeFromCart = () => {
    removeItem(id);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: {precio}$</Card.Text>
        <Card.Text>Cantidad: {quantity}</Card.Text>
        <Card.Text>Total: {quantity * precio}$</Card.Text>
        <div className="cart-item-actions">
          {quantity > 0 ? (
            <Button className='boton-cart' onClick={removeFromCart}>
              Eliminar
            </Button>
          ) : (
            <Button className='boton-cart' onClick={addToCart}>
              Agregar al carrito
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItem;