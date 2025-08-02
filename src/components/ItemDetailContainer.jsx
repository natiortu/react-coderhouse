import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getOneProduct(id)
            .then((res) => setDetalle(res))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <>
            {loading ? <LoaderComponent /> :
                <ItemDetail detalle={detalle} />
            }
        </>
    )
}

export default ItemDetailContainer