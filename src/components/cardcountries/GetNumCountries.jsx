import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardPost from '../cards/CardsPost'

const GetNumCountries = () => {

    const {name} = useParams() 

    const  [confirmedAPI, setConfirmedAPI] = useState([])
    const  [recoveredAPI, setRecoveredAPI] = useState([])
    const  [deathsAPI, setDeathsAPI] = useState([])


    useEffect(() => {
        obtenerDatos()
    })



    const obtenerDatos = async () =>{
        const data = await fetch(`https://covid19.mathdro.id/api/countries/${name}`)
        const api = await data.json()
        setConfirmedAPI(api.confirmed)
        setRecoveredAPI(api.recovered)
        setDeathsAPI(api.deaths)
    }

    const confirmed = confirmedAPI.value
    const recovered = recoveredAPI.value
    const deaths = deathsAPI.value
    const active = confirmedAPI.value - (recoveredAPI.value + deathsAPI.value)

    /* porcentajs de los numeros */
    const porcentajeRecovered = Number(((recovered/confirmed)*100).toFixed(2))
    const porcentajeDeaths = Number(((deaths/confirmed)*100).toFixed(2))
    const porcentajeActive = Number(((active/confirmed)*100).toFixed(2))


    const texts = {
        title:[
            `CORONAVIRUS INFECTIONS ${name.toUpperCase()}`,
            `CURRENTLY INFECTED`,
            `TOTAL RECOVERED`,
            `TOTAL DEATHS`,
        ],
        subtitle:[
            `The total amount of people that have been diagnosed with the coronavirus in ${name}.`,
            `${porcentajeActive}% of the infected people in ${name} are still sick.`,
            `${porcentajeRecovered}% of the infected people in ${name}  have recovered.`,
            `${porcentajeDeaths}% of the infected people in ${name} died.`,
        ]
    }

    return (
        <div>
            <CardPost 
                number={confirmed} 
                title={texts.title[0]} 
                subtitle={texts.subtitle[0]}
            />

            <CardPost 
                number={active} 
                title={texts.title[1]} 
                subtitle={texts.subtitle[1]}
            />

            <CardPost 
                number={recovered} 
                title={texts.title[2]} 
                subtitle={texts.subtitle[2]}
           />

            <CardPost 
                number={deaths} 
                title={texts.title[3]} 
                subtitle={texts.subtitle[3]}
           />

        </div>
    )
}

export default GetNumCountries
