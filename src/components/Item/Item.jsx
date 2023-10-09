import './Item.css';
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock}) => {

    return(
        <Container> 
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
                        <Link to={`/itemDetail/${id}`} className='boton-detalle'>Ver Detalle</Link>
                    </Card.Body>
                </Card>
            </Container> 
        
    )
}

export default Item;