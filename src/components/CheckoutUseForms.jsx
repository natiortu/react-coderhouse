import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import EmptyCart from './EmptyCart'
import React, { useContext, useState } from 'react'

const CheckoutUseForms = () => {

    const { cart, cartTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const { register, handleSubmit, formState: {errors}, getValues } = useForm()

    const finalizarcompra = (datosForm) => {

        console.log(datosForm, 'datosForm')

        let order = {
            comprador: {
                name: datosForm.name,
                lastname: datosForm.lastname,
                address: datosForm.address,
                email: datosForm.email
            },
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, 'orders')

        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
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
                        <h1> Completá tus datos</h1>
                        <form onSubmit={handleSubmit(finalizarcompra)}>
                            <input className='form-control' name='name' placeholder='Completá tu nombre' type="text" {...register("name", { required: true, minLength: 3 })} />
                            {errors?.name?.type === "required" && <span style={{ color: 'red' }}> Por favor, completá tu nombre. </span>}
                            {errors?.name?.type === "minLength" && <span style={{ color: 'red' }}> El nombre debe tener como mínimo 3 caracteres. </span>}

                            <input className='form-control' name='last-name' placeholder='Completá tu apellido' type="text" {...register("lastname", { required: true, minLength: 3 })} />
                            {errors?.lastname?.type === "required" && <span style={{ color: 'red' }}> Por favor, completá tu apellido. </span>}
                            {errors?.lastname?.type === "minLength" && <span style={{ color: 'red' }}> El apellido debe tener como mínimo 3 caracteres. </span>}

                            <input className='form-control' name='address' placeholder='Calle 47 n 972' type="text" {...register("address", { required: true, minLength: 10, maxLength: 40 })} />
                            {errors?.address?.type === "required" && <span style={{ color: 'red' }}> Por favor, completá tu dirección. </span>}
                            {errors?.address?.type === "minLength" && <span style={{ color: 'red' }}> La dirección debe tener como mínimo 10 caracteres. </span>}
                            {errors?.address?.type === "maxLength" && <span style={{ color: 'red' }}> La dirección debe tener como máximo 40 caracteres. </span>}

                            <input className='form-control' name='email' placeholder='Completá tu correo' type="email" {...register("email", { required: true })} />
                            {errors?.email?.type === "required" && <span style={{ color: 'red' }}> Por favor, completá tu correo electrónico. </span>}

                            <input className='form-control' name='second-email' placeholder='Repetí tu correo' type="email"  {...register("secondemail", { required: true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
                            {errors?.secondemail?.type === "required" && <span style={{ color: 'red' }}> Por favor, repetí tu correo electrónico. </span>}
                            {errors?.secondemail?.type === "equalsMails" && <span style={{ color: 'red' }}> Los correos no coinciden. </span>}

                            <button className='btn btn-success' type='submit'> Enviar </button>
                        </form>
                    </div>
            }
        </>
    )
}

export default CheckoutUseForms