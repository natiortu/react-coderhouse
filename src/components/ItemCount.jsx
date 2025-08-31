import { useState } from 'react'

const ItemCount = ({ stock, agregarProductos }) => {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const comprar = () => {
        agregarProductos(count);
    }

    return (
        <>
            {stock > 0
                ?
                <div className="d-flex justify-content-center flex-column gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <button className='btn btn-danger' onClick={restar}>-</button>
                        <span className="btn btn-outline-secondary px-3 py-1">{count}</span>
                        <button className='btn btn-success' onClick={sumar}>+</button>
                    </div>
                    <div>
                        <button className='btn btn-primary w-100' disabled={count === 0 || stock === 0} onClick={comprar}>Agregar al carrito</button>
                    </div>
                </div>
                : <div className='fs-3'> SIN STOCK </div>
            }
        </>
    )
}

export default ItemCount