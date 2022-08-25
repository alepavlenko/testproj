import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Logo from "../../Common/Icons/Logo";
import Home from "../../Common/Icons/Home";
import Warehouses from "../../Common/Icons/Warehouses";
import Accounts from "../../Common/Icons/Accounts";
import Cards from "../../Common/Icons/Cards";
import Contacts from "../../Common/Icons/Contacts";
import Chat from "../../Common/Icons/Chat";
import {ListItemIconStyled} from "./CustomDrawer.style";

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
    const navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(2);
    const [mobileOpen, setMobileOpen] = useState(false);

    const container = window.document.body;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const renderDrawerContent = () => (
        <div className={style.wrapSideBar}>
            <div onClick={() => {
                navigate('/', {replace: true})
            }} className={style.wrapLogo}>
                <Logo/>
            </div>
            <Divider/>
            <List className={style.wrapList}>
                {listArray.map((item) => (
                    <ListItem
                        disablePadding
                        key={item.id}
                        className={selectedIndex === item.id ? style.selectedMenu : ''}
                        onClick={() => setSelectedIndex(item.id)}
                    >
                        <Link to={`/${item.label}`} className={style.wrapLink}>
                            <ListItemButton>
                                <ListItemIconStyled
                                    className={selectedIndex === item.id ? style.selectIcon : style.wrapListItem}>
                                    {item.icon}
                                </ListItemIconStyled>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </Link>
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
                    keepMounted: true,
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {renderDrawerContent()}
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
                {renderDrawerContent()}
            </Drawer>
        </>
    );
};

export default CustomDrawer;