import React from 'react'
import Lista from '../list/Lista'
import {
    makeStyles,
    Drawer,
    Divider
} from '@material-ui/core'


const drawerWidth = 240;
const estilos = makeStyles(theme => ({
    drawer: {
        width: drawerWidth - 1,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,

}))

function Cajon(props) {

    const classes = estilos()

    return (
        <Drawer
          classes={{paper: classes.drawerPaper,}}
          className={classes.drawer}
          variant={props.variant}
          open={props.open}
          onClose={props.onClose ? props.onClose : null }
          anchor="left"
        >

            <div className={classes.toolbar}></div>
            <Divider />
            <Lista />

        </Drawer>
    )
}

export default Cajon
