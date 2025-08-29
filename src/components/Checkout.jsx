import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'

const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [email, setValidMail] = useState({})
    const { cart, cartTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        }
        )
    }

    //console.log(buyer);

    //validaciones 
    // opc 1: agregar validaciones aca NO USAR ALERT. Validar que el carrito no esté vacio
    // opc 2: usar libreria useForm
    // agregar un loader
    const finalizarcompra = (e) => {
        e.preventDefault(); //para que no recargue

        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email) {
            console.log("Por favor, complete todos los campos.")
        } else if (buyer.email != validMail) {
            console.log("Los correos no coinciden.")
        } else {

            let order = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }

            const ventas = collection(db, 'orders')
            //agregar el documento
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <>
            {
                orderId
                    ? <div>
                        <h1> Orden generada correctamente. </h1>
                        <p> Id: {orderId} </p>
                        <Link className='btn btn-dark' to='/'> Volver a Inicio </Link>
                    </div>
                    : <div>
                        <h1> Completar tus datos</h1>
                        <form onSubmit={finalizarcompra}>
                            <input className='form-control' name='name' placeholder='Complete su nombre' type="text" onChange={buyerData} />
                            <input className='form-control' name='last-name' placeholder='Complete su apellido' type="text" onChange={buyerData} />
                            <input className='form-control' name='address' placeholder='Calle 47 n 972' type="text" onChange={buyerData} />
                            <input className='form-control' name='email' placeholder='Complete su correo' type="email" onChange={buyerData} />
                            <input className='form-control' name='second-email' placeholder='Repita su correo' type="email" onChange={(e) => setValidMail(e.target.value)} />
                            <button className='btn btn-success' type='submit'> Enviar </button>
                        </form>
                    </div>
            }

        </>
    )
}

export default Checkout