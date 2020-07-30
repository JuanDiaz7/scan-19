import React from 'react'
import {Link, BrowserRouter as Router} from "react-router-dom";
import {List, ListItem, ListItemIcon,ListItemText} from '@material-ui/core'




const NameStatic = (props) => {
    return (
        <div >
            <Router >
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
            </Router>
        </div>
    )
}

export default NameStatic