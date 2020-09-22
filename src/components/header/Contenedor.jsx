import React from 'react'
import Header from './Header'
import Cajon from './Cajon'
import { makeStyles, Hidden,} from '@material-ui/core'

 

const estilos = makeStyles(theme => ({
    root:{
        display: "flex"
    },
    toolbar:{
        marginTop: "5rem"
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
                    variant="temporary"
                    open={abrir}
                    onClose={openDoor}
                    
                />   
            </Hidden>
                <div className={classes.toolbar}></div>
        </div>
    )
}

export default Contenedor
