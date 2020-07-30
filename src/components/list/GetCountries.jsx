import React, {useEffect, useState} from 'react'
import {Link, BrowserRouter as Router} from "react-router-dom";
import {List, ListItem, ListItemIcon,ListItemText} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';



const GetCountries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        obtenerCountriesApi()
    }, [])

    const obtenerCountriesApi = async() =>{
        const data = await fetch("https://covid19.mathdro.id/api/countries")
        const Api = await data.json()
        setCountries(Api.countries)
    }

    return (
        <div >
            {            
                countries.map(item=>(
                    <List component="nav" key={item.name}>
                            <ListItem button> 
                            <ListItemIcon>
                                <PublicIcon />
                            </ListItemIcon>
                        <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItem>
                    </List>
                ))
            }
        </div>
    )
}

export default GetCountries