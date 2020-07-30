import React from 'react'
import GetCountries from './GetCountries'
import NameStatic from './NameStatic'
import {Divider} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import LocationOnIcon from '@material-ui/icons/LocationOn'




const PaintList = () => {

    return (
        <div >
            <NameStatic 
                route="/" 
                NameStatic="Home" 
                icon={<HomeIcon/>} 
            />
            <NameStatic 
                route="/my-location" 
                NameStatic="my location" 
                icon={<LocationOnIcon/>} 
            />
            <Divider  />

            <GetCountries  />
        </div>
    )
}

export default PaintList
