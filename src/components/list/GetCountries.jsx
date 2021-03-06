import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {List, ListItem, ListItemIcon,ListItemText} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';



const GetCountries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        obtenerCountriesApi()
    },[])

    const obtenerCountriesApi = async() =>{
        const data = await fetch("https://covid19.mathdro.id/api/countries")
        const Api = await data.json()
        setCountries(Api.countries)
    }

    return (
        <div >
            {            
                countries.map(item=>(
                    <List component="nav" key={item.name} >
                            <Link to={item.name} style={{textDecoration: "none", color: "#000000DE"}}>
                                <ListItem button> 
                                    <ListItemIcon>
                                        <PublicIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.name}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                    </List>
                ))
            }
        </div>
    )
}

export default GetCountries