
import '../css/ItemListContainer.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList'
import LoaderComponent from './LoaderComponent';

const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(false);

    //firebase
    useEffect(() => {
        setLoading(true);
        const productsCollection = category ? query(collection(db, 'productos'), where("category", "==", category)) : collection(db, "productos") // referencia de la bd               
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [category]);

    return (
        <>
            {loading
                ? <LoaderComponent />
                : data.length > 0
                    ? <div>
                        <ItemList data={data} />
                    </div>
                    : <div className="div-no-products">
                        <h2 className='h2'> No hay productos para mostrar.</h2>
                        <Link className='btn btn-primary link-see-all-products' to={'/'}> Ver todos los productos </Link>
                    </div>
            }
        </>
    )
}

export default ItemListContainer