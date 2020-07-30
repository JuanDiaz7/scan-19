import React from 'react'
import {makeStyles, Typography} from "@material-ui/core"
import {withWidth,  Hidden, Button} from '@material-ui/core'


const drawerWidth = 245;
const useStyles = makeStyles((theme) =>({
    AutoMargin:{
        marginRight: theme.spacing(2),
        marginLeft: "5px",
        [theme.breakpoints.up('sm')]: {
          marginLeft: drawerWidth ,
        },
    }, 
}));

const Prueba = (props) => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.AutoMargin}>
                <Typography variant="h6" color="initial">
                Ancho de la pantalla: {props.width}  
                </Typography>
                <Typography variant="h3" color="initial">
                    HOLA COMO ETSAS {props.width}
                </Typography>
            </div>
        </div>
    )
}

export default Prueba
