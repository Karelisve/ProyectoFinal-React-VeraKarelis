import React from "react";
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../Products/products';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';


const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()


    useEffect(() => {
        const asyncFunc = categoriaId ? getProductsByCategory : getProducts

        asyncFunc(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoriaId])
    
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