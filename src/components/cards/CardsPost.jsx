import React from 'react';
import {
    Card, 
    makeStyles,
    CardContent, 
    Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    AutoMargin:{
        marginRight: "5px",
        marginLeft: "5px", /* margen izq cuando esta contraido de las card */
        [theme.breakpoints.up('sm')]: {
          marginLeft:  280, /* margen derecho cuando esta NO contraido de las card */
          marginRight: 40, /* margen izq cuando esta contraido de las card */
        },
    }, 
    root: {
        minWidth: 270,
    },
    SubColor:{
        background: "#00695c",
        padding: "0.3rem",
    }
}));

const CardsPost = (props) => {

    const classes = useStyles();

    return ( 
        <div className={classes.AutoMargin}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography  variant="h5">
                        {props.icons}  {props.title}
                    </Typography>
                    <Typography variant="h2">
                        {props.number} 
                    </Typography>
                    <Typography variant="subtitle2">
                        {props.subtitle} 
                    </Typography>
                </CardContent>
                <div className={classes.SubColor}></div>
            </Card>
            <br/>
        </div> 
    );
}
 
export default CardsPost;