import React, {Fragment, useEffect, useState} from 'react'
import CardsPost from './CardsPost'
import { FaRegDizzy, FaRegSmileBeam, FaRegSadTear} from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";


const GetNumber = () => {

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
            "GLOBAL CORONAVIRUS INFECTIONS",
            "CURRENTLY INFECTED",
            "TOTAL RECOVERED",
            "TOTAL DEATHS",
        ],
        subtitle:[
            "The total amount of people that have globally been diagnosed with the coronavirus.",
            `${porcentajeActive}% of the infected people are still sick.`,
            `${porcentajeRecovered}% of the infected people have recovered.`,
            `${porcentajeDeaths}% of the infected people died.`,
        ]
    }

    return (
        <Fragment>
            <CardsPost 
                icons={<FcMindMap/>}
                number={confirmed} 
                title={texts.title[0]} 
                subtitle={texts.subtitle[0]}
            />

            <CardsPost 
                icons={<FaRegSadTear color="purple"/>}
                number={active} 
                title={texts.title[1]} 
                subtitle={texts.subtitle[1]}
            />

            <CardsPost 
                icons={<FaRegSmileBeam color="green"/>}
                number={recovered} 
                title={texts.title[2]} 
                subtitle={texts.subtitle[2]}
           />

            <CardsPost 
                icons={<FaRegDizzy color="red"/>}
                number={deaths} 
                title={texts.title[3]} 
                subtitle={texts.subtitle[3]}
            />
        </Fragment>
    )
}

export default GetNumber
