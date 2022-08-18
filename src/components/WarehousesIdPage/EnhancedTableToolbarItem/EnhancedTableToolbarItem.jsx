import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {ButtonStyled} from "../../WarehousesPage/EnhancedTableToolbar/EnhancedTableToolbar.style";
import PlusIcons from "../../Common/Icons/PlusIcons";

const EnhancedTableToolbarItem = ({setOpenAddWarehouses, warehouseId}) => {

    const allWarehouses = JSON.parse(localStorage.getItem('warehouses'))
    const localWare = allWarehouses.filter((item) =>  item.warehousesid === warehouseId)

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
            }}
        >
            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {
                    <div>Warehouses: {localWare[0].nameWarehouses}</div>
                }
            </Typography>
            <ButtonStyled variant="contained" onClick={setOpenAddWarehouses}>Add Cargo <PlusIcons/></ButtonStyled>
        </Toolbar>
    );
};

export default EnhancedTableToolbarItem;