import '../css/ItemListContainer.css';

import { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';

const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then((res) => {
                if (category) {
                    setData(res.filter((prod) => prod.category === category))
                } else {
                    setData(res);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [category])

    return (
        <>
            {loading ? <LoaderComponent /> :
                <div className="div-greeting">
                    {/* <h1 className="h1-greeting">{greeting}</h1> */}
                    <ItemList data={data} />
                </div>
            }
        </>
    )
}

export default ItemListContainer