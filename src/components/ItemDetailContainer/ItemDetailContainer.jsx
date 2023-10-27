import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../servicio/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(()=>{
        const collectionProd = collection(db, 'productos')
        const referenciaDoc = doc(collectionProd, itemId)
        getDoc(referenciaDoc)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        })
    }, [itemId]);



    return(

        <div className='item-detail-container'>
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer;