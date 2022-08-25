import React, {useState} from 'react';

import {BoxItemWrapper, BoxStyledInner} from "./WarehousesIdPage.style";
import {CssBaseline} from "@mui/material";
import style from './WarehousesIdPage.module.css'
import NavBarWereHouses from "../WarehousesPage/NavBarWereHouses/NavBarWereHouses";
import CustomDrawer from "../WarehousesPage/Drawer/CustomDrawer";
import ItemsWarehouses from "./ItemsWarehouses/ItemsWarehouses";

const WarehousesIdPage = () => {
    const [ii, setIi] = useState(0)
    console.log(ii)
    return (
        <BoxItemWrapper>
            <CssBaseline/>
            <NavBarWereHouses/>
            <BoxStyledInner
                component="nav"
                aria-label="mailbox folders"
            >
                <CustomDrawer/>
            </BoxStyledInner>
            <div className={style.wrapContent}>
                <ItemsWarehouses/>
            </div>
        </BoxItemWrapper>
    );
};

export default WarehousesIdPage;