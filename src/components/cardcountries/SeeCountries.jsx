import React from 'react';
import {
    Card, 
    makeStyles,
    CardContent, 
    Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    AutoMargin:{
        marginRight: theme.spacing(2),
        marginLeft: "5px",
        [theme.breakpoints.up('sm')]: {
          marginLeft:  245,
        },
    }, 
    root: {
        minWidth: 275,
    },
}));

const SeeCountries = (props) => {

    const classes = useStyles();

    return ( 
        <div className={classes.AutoMargin}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography  variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="h2">
                        {props.number} 
                    </Typography>
                    <Typography variant="subtitle2">
                        {props.subtitle} 
                    </Typography>
                </CardContent>
            </Card>
            <br/>
        </div> 
    );
}
export default SeeCountries