import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, List, ListItemIcon, ListItemText, Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
    return (
        <>
            <Divider />
            <List>
                <ListItem component={Link} to="/" >
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Starred"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Upcoming"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Profile"} />
                </ListItem>

            </List>
            <Divider />
        </>
    )
}
