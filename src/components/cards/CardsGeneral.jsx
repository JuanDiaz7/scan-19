import React, {Fragment, useEffect, useState} from 'react'
import CardsPos from './CardsPos'

const CardsGeneral = () => {

    const  [confirmedAPI, setConfirmedAPI] = useState([])
    const  [recoveredAPI, setRecoveredAPI] = useState([])
    const  [deathsAPI, setDeathsAPI] = useState([])


    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data = await fetch("https://covid19.mathdro.id/api")
        const Api = await data.json()
        setConfirmedAPI(Api.confirmed)
        setRecoveredAPI(Api.recovered)
        setDeathsAPI(Api.deaths)
    }

    /* numeros de cada casos */
    const confirmed = confirmedAPI.value
    const recovered = recoveredAPI.value
    const deaths = deathsAPI.value
    const active = confirmedAPI.value - (recoveredAPI.value + deathsAPI.value)

    /* porcentajs de los numeros */
    const porcentajeRecovered = Number(((recovered/confirmed)*100).toFixed(2))
    const porcentajeDeaths = Number(((deaths/confirmed)*100).toFixed(2))
    const porcentajeActive = Number(((active/confirmed)*100).toFixed(2))

    /* textos a utilizar */
    const texts = {
        title:[
            "INFECCIONES MUNDIALES POR CORONAVIRUS",
            "TOTAL DE CONTAGIADOS ACTIVOS",
            "TOTAL RECUPERADO",
            "MUERTES TOTALES",
        ],
        subtitle:[
            "La cantidad total de personas que han sido diagnosticadas globalmente con el coronavirus.",
            `${porcentajeActive}% de las personas infectadas todavía están enfermas.`,
            `${porcentajeRecovered}% de las personas infectadas se han recuperado.`,
            `${porcentajeDeaths}% de las personas infectadas murieron.`,
        ]
    }

    return (
        <Fragment>
            <CardsPos 
                number={confirmed} 
                title={texts.title[0]} 
                subtitle={texts.subtitle[0]}
            />

            <CardsPos 
                number={recovered} 
                title={texts.title[1]} 
                subtitle={texts.subtitle[1]}
            />

            <CardsPos 
                number={deaths} 
                title={texts.title[2]} 
                subtitle={texts.subtitle[2]}
           />

            <CardsPos 
                number={active} 
                title={texts.title[3]} 
                subtitle={texts.subtitle[3]}
            />


        </Fragment>
    )
}

export default CardsGeneral
