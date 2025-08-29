import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import EmptyCart from './EmptyCart'
import { useContext, useState } from 'react'
import '../css/CheckoutUseForms.css';

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
                    ? <div className='m-1 my-5 text-center form-compra'>
                        <h1> ¡La compra fue realizada exitosamente! </h1>
                        <p className='fs-5 my-4'> Id: {orderId} </p>
                        <Link className='btn btn-dark my-4' to='/'> Volver a Inicio </Link>
                    </div>
                    : <div>
                        <h1 className='text-center my-4'> Completá tus datos</h1>
                        <form className='m-1 my-4 text-center form-compra' onSubmit={handleSubmit(finalizarcompra)}>
                            <input className='form-control w-50 mx-auto mt-5' name='name' placeholder='Completá tu nombre' type="text" {...register("name", { required: true, minLength: 3 })} />
                            {errors?.name?.type === "required" &&  <div className="text-danger mt-1">Por favor, completá tu nombre.</div>}
                            {errors?.name?.type === "minLength" && <div className="text-danger mt-1"> El nombre debe tener como mínimo 3 caracteres. </div>}

                            <input className='form-control w-50 mx-auto my-1' name='last-name' placeholder='Completá tu apellido' type="text" {...register("lastname", { required: true, minLength: 3 })} />
                            {errors?.lastname?.type === "required" && <div className="text-danger mt-1"> Por favor, completá tu apellido. </div>}
                            {errors?.lastname?.type === "minLength" && <div className="text-danger mt-1"> El apellido debe tener como mínimo 3 caracteres. </div>}

                            <input className='form-control w-50 mx-auto my-1' name='address' placeholder='Calle 47 n 972' type="text" {...register("address", { required: true, minLength: 10, maxLength: 40 })} />
                            {errors?.address?.type === "required" && <div className="text-danger mt-1"> Por favor, completá tu dirección. </div>}
                            {errors?.address?.type === "minLength" && <div className="text-danger mt-1"> La dirección debe tener como mínimo 10 caracteres. </div>}
                            {errors?.address?.type === "maxLength" && <div className="text-danger mt-1"> La dirección debe tener como máximo 40 caracteres. </div>}

                            <input className='form-control w-50 mx-auto my-1' name='email' placeholder='Completá tu correo' type="email" {...register("email", { required: true })} />
                            {errors?.email?.type === "required" && <div className="text-danger mt-1"> Por favor, completá tu correo electrónico. </div>}

                            <input className='form-control w-50 mx-auto my-1' name='second-email' placeholder='Repetí tu correo' type="email"  {...register("secondemail", { required: true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
                            {errors?.secondemail?.type === "required" && <div className="text-danger mt-1"> Por favor, repetí tu correo electrónico. </div>}
                            {errors?.secondemail?.type === "equalsMails" && <div className="text-danger mt-1"> Los correos no coinciden. </div>}

                            <button className='btn btn-success my-4' type='submit'> Enviar </button>
                        </form>
                    </div>
            }
        </>
    )
}

export default CheckoutUseForms