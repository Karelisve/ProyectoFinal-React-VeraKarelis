import ItemCount from "../ItemCount/ItemCount"
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
const ItemDetail = ({id, nombre, precio, img, stock}) => {
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
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ')}/>
                    </Card.Body>
                </Card>
            </Container>
    )
}

export default ItemDetail;