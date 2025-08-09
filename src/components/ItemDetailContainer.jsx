import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    //firebase
    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, 'productos') // referencia de la bd
        //const docRef = doc(productsCollection, id)
        const docRef = doc(db, 'productos', id) //forma mas corta

        getDoc(docRef)
        .then((res) => setDetalle({id: res.id, ...res.data()}))
        .catch((error) => console.log(error))
        .finally(() =>setLoading(false))
    }, [id])

    //promise 

    // useEffect(() => {
    //     setLoading(true)
    //     getOneProduct(id)
    //         .then((res) => setDetalle(res))
    //         .catch((error) => console.log(error))
    //         .finally(() => setLoading(false))
    // }, [id])

    return (
        <>
            {loading ? <LoaderComponent /> :
                <ItemDetail detalle={detalle} />
            }
        </>
    )
}

export default ItemDetailContainer