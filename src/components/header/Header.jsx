import React from 'react'
import {AppBar,Toolbar, makeStyles, IconButton, Typography} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({

    /* hace que el icono del desaparezca */
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    }, 

    /* hace que se el header se adapte a la pantalla */
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
    },

}));

const Header = (props) => {

    const classes = useStyle();
    return (
            <AppBar className={classes.appBar}>
                <Toolbar> 
                    <IconButton 
                        color="inherit" 
                        arial-label="menu"
                        className={classes.menuButton} 
                        onClick={() => props.openDoor()}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h6">
                        SCAN-19
                    </Typography>
                
                </Toolbar>
            </AppBar>
    );
}
 
export default Header;