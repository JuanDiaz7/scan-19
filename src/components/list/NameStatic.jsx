import React from 'react'
import {Link} from "react-router-dom";
import {List, ListItem, ListItemIcon,ListItemText} from '@material-ui/core'




const NameStatic = (props) => {
    return (
        <Link to={`${props.route}`} style={{textDecoration: "none", color: "#000000DE"}}>
            <List component="nav">
                <ListItem button> 
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText>
                        {props.NameStatic}
                    </ListItemText>
                </ListItem>
            </List>
        </Link>
    )
}

export default NameStatic