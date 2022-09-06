import React, {useState} from 'react';

import {CssBaseline} from "@mui/material";
import CustomDrawer from "./Drawer/CustomDrawer";
import NavBarWereHouses from './NavBarWereHouses/NavBarWereHouses';
import Warehouses from "./Warehouses/Warehouses";
import {BoxItemWrapper, BoxStyledInner} from "./WarehousesPage.style";

import style from './WarehousesPage.module.css'

const WarehousesPage = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    return (
        <BoxItemWrapper>
            <CssBaseline/>
            <NavBarWereHouses
                setMobileOpen={setMobileOpen}
                mobileOpen={mobileOpen}
            />
            <BoxStyledInner
                component="nav"
                aria-label="mailbox folders"
                sx={{
                    display: {xs: 'none', sm: 'block'}
                }}
            >
                <CustomDrawer
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />
            </BoxStyledInner>
            <div className={style.wrapContent}>
                <Warehouses/>
            </div>

        </BoxItemWrapper>

    );
};

export default WarehousesPage;