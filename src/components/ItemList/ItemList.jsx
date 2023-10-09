import Item from '../Item/Item';
import {Container} from 'react-bootstrap';
const ItemList = ({products}) => {
    return (
        <Container>
        <div className='grupo-lista'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
        </Container>
    )
}

export default ItemList;