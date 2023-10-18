import { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';


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

            { cart.map((p) => <CartItem key={p.id} {...p}/>)}
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()} className='boton'>Limpiar carrito</button>
            <Link to='/checkout' className='boton-cart'>Checkout</Link>
        </div>
    )

}

export default Cart