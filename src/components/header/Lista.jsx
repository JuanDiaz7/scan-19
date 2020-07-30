import React from 'react'
import {
    List, 
    ListItem, 
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';



const Lista = () => {
    return (
        <div >
            <List component="nav">
                <ListItem button> 
                    <ListItemIcon>
                        <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary="{pais}" />
                </ListItem>
            </List>
        </div>
    )
}

export default Lista
