import React from 'react';

import {Box, CssBaseline} from "@mui/material";
import CustomDrawer from "./Drawer/CustomDrawer";
import NavBarWereHouses from './NavBarWereHouses/NavBarWereHouses';

import style from './WarehousesPage.module.css'
import Warehouses from "./Warehouses/Warehouses";
import DownNavbar from "./DownNavbar/DownNavbar";

const drawerWidth = 240;

const WarehousesPage = () => {

    return (
        <Box sx={{
            display: 'flex',
            outline: "none"
        }}>
            {/*<DownNavbar/>*/}
            <CssBaseline/>
            
            {/*NavBar*/}
            <NavBarWereHouses/>

            {/*side bar*/}
            <Box
                component="nav"
                sx={{
                    width: {sm: drawerWidth},
                    flexShrink: {sm: 0},
                    height: "100vh",
                }}
                aria-label="mailbox folders"
            >
                <CustomDrawer/>
            </Box>

            {/* main content*/}
            <div className={style.wrapContent}>
                <Warehouses/>
            </div>

        </Box>

    );
};

export default WarehousesPage;