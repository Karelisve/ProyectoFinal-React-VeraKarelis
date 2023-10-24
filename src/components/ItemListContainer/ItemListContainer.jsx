import React from "react";
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../servicio/firebase'


const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState([])
    const { categoriaId } = useParams()

    useEffect(()=>{
        const coleccionProductos = categoriaId ? query(collection(db, 'productos'), where('categoria', '==', categoriaId)) : collection(db, 'productos')
        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                        id:product.id,
                        ...product.data()
                    }
            })
            setProducts(list)
        })
        .catch((error)=> console.log(error))

    },  [categoriaId]);



    // useEffect(() => {
    //     const asyncFunc = categoriaId ? getProductsByCategory : getProducts

    //     asyncFunc(categoriaId)
    //         .then(response => {
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [categoriaId])
    
    return (
        <>
        <section className="greeting">
            <h1>{greeting}</h1>
        </section>
        <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;