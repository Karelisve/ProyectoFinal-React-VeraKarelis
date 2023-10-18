import React, { useContext } from 'react';
import './CardWidget.css'
import carrito from './assets/carrito.svg'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to='/cart' className='quantity carrito'>
            <img src={carrito} alt='cart-widget'/>
             {totalQuantity}
        </Link>
    )
}

export default CardWidget