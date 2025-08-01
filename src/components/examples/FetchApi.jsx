import React, { useEffect, useState } from 'react'
import FetchCard from './FetchCard'

const FetchApi = () => {

    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        //pedir datos
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((response) => console.log(response.results))
            .catch((error) => console.log(error))
    }, [])

    console.log(fetchData, 'fetchData')

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            {/* {
            fetchData.map((personaje) => <p key={personaje.id}> {personaje.name} </p>)
        } */}
            {
                fetchData.map((personaje) => <FetchCard personaje={personaje} key={personaje.id}/>)
            }
        </div>
    )
}

export default FetchApi
