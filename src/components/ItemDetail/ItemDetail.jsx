import ItemCount from "../ItemCount/ItemCount"
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id, nombre, precio, img, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

    return(
        <Container className="detail"> 
                <Card className='grupo-items' style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={img} className='img-catalogo'/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                        Precio: {precio}
                        </Card.Text>
                        <Card.Text>
                        Cantidad Disponible: {stock}
                        </Card.Text>
                        {
                            quantityAdded > 0 ? (
                                <>
                                <div className="separar">
                                <Link className="boton-agregar" to = '/cart'>Finalizar compra</Link>

                                </div>
                                <div>
                                <Link className="boton-agregar" to = '/'>Seguir comprando</Link>

                                </div>
                                </>
                            ) : (
                                <ItemCount initial = {1} stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </Card.Body>
                </Card>
            </Container>
    )
}

export default ItemDetail;