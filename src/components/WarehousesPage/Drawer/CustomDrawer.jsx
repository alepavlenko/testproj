import React, {useState} from 'react';

import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import Logo from "../../Common/Logo/Logo";
import Home from "../../Common/Icons/Home";
import Warehouses from "../../Common/Icons/Warehouses";
import Accounts from "../../Common/Icons/Accounts";
import Cards from "../../Common/Icons/Cards";
import Contacts from "../../Common/Icons/Contacts";
import Chat from "../../Common/Icons/Chat";

import style from "./CustomDrawer.module.css";


const listArray = [
    {
        id: 1,
        label: 'Home',
        icon: <Home/>
    },
    {
        id: 2,
        label: 'Warehouses',
        icon: <Warehouses/>
    },
    {
        id: 3,
        label: 'Accounts',
        icon: <Accounts/>
    },
    {
        id: 4,
        label: 'Cards',
        icon: <Cards/>
    },
    {
        id: 5,
        label: 'Contacts',
        icon: <Contacts/>
    },
    {
        id: 6,
        label: 'Chat',
        icon: <Chat/>
    },
]

const drawerWidth = 240;



const CustomDrawer = () => {
    const [selectedIndex, setSelectedIndex] = useState(2);

    const [mobileOpen, setMobileOpen] = useState(false);

    const container = window.document.body;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const checkedList = (event, index) => {
        // setSelectedIndex(index);
        // console.log(selectedIndex)

    }

    const test = (id) => {
        setSelectedIndex(id)
    }


    const drawer = () => (
        <div className={style.wrapSideBar}>
            <div className={style.wrapLogo}>
                <Logo/>
            </div>
            <Divider/>
            <List className={style.wrapList}>
                {listArray.map((item) => (
                    <ListItem className={selectedIndex === item.id ? 'ACTIVE222222222' : ''} key={item.id} disablePadding onClick={() => test(item.id)}>
                        {/*<Link to={`/${item.label}`} className={style.wrapLink}>*/}
                            <ListItemButton onClick={(event) => checkedList(event, item.id)} >
                                <ListItemIcon className={style.wrapListItem}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        {/*</Link>*/}
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );

    return (
        <>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {drawer()}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'block',
                        height: "100vh"
                    },
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {drawer()}
            </Drawer>
        </>
    );
};

export default CustomDrawer;