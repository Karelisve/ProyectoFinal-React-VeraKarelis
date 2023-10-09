import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    let[quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity +=1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -=1)
        }
    }

    return(
        <div className='Contador'>
            <div className='controles'>
                <button className='boton' onClick={decrement}> - </button>
                <h2 className='numero'>{quantity}</h2>
                <button className='boton' onClick={increment}> + </button>
            </div>
            <div>
                <button className='boton' onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito </button>
            </div>
        </div>
    )
}


export default ItemCount;