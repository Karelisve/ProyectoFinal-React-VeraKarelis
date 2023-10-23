import { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Button, Container } from 'react-bootstrap'


const Cart = () => {

    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div className='titulo-cart'>
                <h1 className='titulo-c'> No hay productos en el carrito</h1>
                <div className='titulo-bot'> 
                    <Link to='/' className='boton-carrito'>Productos</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Container>
                { cart.map((p) => <CartItem key={p.id} {...p}/>)}
                <h2 className='total'>Total: ${total}</h2>
                <div className='botones-cart-item'>
                    <Button onClick={() => clearCart()} variant='secondary' className='boton-check'>Limpiar carrito</Button>
                    <Link to='/checkout'><Button variant="outline-success" className='boton-check'>Checkout</Button></Link>
                </div>
            </Container>
        </div>
    )

}

export default Cart