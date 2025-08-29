import { Spinner } from 'react-bootstrap'
import React from 'react'

const LoaderComponent = () => {
    return (
        <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Spinner animation='grow' variant='dark' />
        </div>
    )
}

export default LoaderComponent
