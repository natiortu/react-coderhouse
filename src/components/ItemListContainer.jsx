import '../css/ItemListContainer.css';

import { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';
import ItemList from '../components/ItemList'

const ItemListContainer = ({greeting}) => {

    //Estado donde se van a almacenar los productos
    const [data, setData] = useState([])

    //Este useEffect se ejecuta una sola vez []
    useEffect( () => {        
        getProducts() //Se llama a la funcion que retorna una promise
        .then((res) => setData(res)) //Se guarda la respuesta en data
        .catch((error) => console.log(error)) 
    }, [])

    console.log(data);

    return(
        <div className="div-greeting">
            <h1 className="h1-greeting">{greeting}</h1>
            {/* {data.map((producto) => <p key={producto.id}> {producto.name} </p>)} */ }
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer