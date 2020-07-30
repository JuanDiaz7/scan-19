import React from 'react'
import Header from './Header'
import Cajon from './Cajon'


import {
    makeStyles,
    Hidden,

} from '@material-ui/core'

 

const estilos = makeStyles(theme => ({
    root:{
        display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(3),
    },
}))


function Contenedor() {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const openDoor = () =>{
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Header openDoor={openDoor}/>
            <Hidden xsDown>
                {/* aca trabajamos y mandamos los datos con props */}
                <Cajon 
                    variant="permanent"
                    open={true}

                />   
            </Hidden>
            <Hidden smUp>
                <Cajon 
                    variant="ptemporary"
                    open={abrir}
                    onClose={openDoor}
                    
                />   
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
            </div>
        </div>
    )
}

export default Contenedor
