import {useState} from "react";

import {BoxItemWrapper, BoxStyledInner} from "./WarehousesIdPage.style";
import {CssBaseline} from "@mui/material";
import NavBarWereHouses from "../WarehousesPage/NavBarWereHouses/NavBarWereHouses";
import CustomDrawer from "../WarehousesPage/Drawer/CustomDrawer";

import ItemsWarehouses from "./ItemsWarehouses/ItemsWarehouses";
import style from './WarehousesIdPage.module.css';

const WarehousesIdPage = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    return (
        <BoxItemWrapper>
            <CssBaseline/>
            <NavBarWereHouses mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            <BoxStyledInner
                component="nav"
                aria-label="mailbox folders"
                sx={{display: {xs: 'none', sm: 'block'},}}

            >
                <CustomDrawer
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />
            </BoxStyledInner>
            <div className={style.wrapContent}>
                <ItemsWarehouses/>
            </div>
        </BoxItemWrapper>
    );
};

export default WarehousesIdPage;