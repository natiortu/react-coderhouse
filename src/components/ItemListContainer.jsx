import '../css/ItemListContainer.css';

import { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    //Estado donde se van a almacenar los productos
    const [data, setData] = useState([])
    const { category } = useParams()

    //console.log(category, 'categoria');

    useEffect(() => {
        getProducts() //Se llama a la funcion que retorna una promise
            .then((res) => {
                if (category) {
                    setData(res.filter((prod) =>prod.category === category))
                } else { 
                   setData(res);
                }
            })
            .catch((error) => console.log(error))
    }, [category])

    return (
        <div className="div-greeting">
            <h1 className="h1-greeting">{greeting}</h1>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer