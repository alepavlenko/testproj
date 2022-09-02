import React, {memo} from 'react';

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {ButtonStyled} from "../../WarehousesPage/EnhancedTableToolbar/EnhancedTableToolbar.style";

import PlusIcons from "../../Common/Icons/PlusIcons";
import {useSelector} from "react-redux";
import {getWarehouses} from "../../../redux/selectors/warehousesSelectors";
import {Params} from "react-router-dom";

interface warehousesIterElem {
    name: string
    numberProduct: string
    length: number
    width: number
    height: number
    user: string
    _id?: string
}

interface EnhancedTableToolbarItemProps {
    setOpenAddWarehouses: (value: boolean) => void
    warehouseId: any
}

const EnhancedTableToolbarItem = memo(({setOpenAddWarehouses, warehouseId}: EnhancedTableToolbarItemProps) => {

    const warehouses = useSelector(getWarehouses)
    const localWare = warehouses.filter((item: warehousesIterElem) => item._id === warehouseId)

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
                    <div>Warehouses: {localWare[0]?.name}</div>
                }
            </Typography>
            <ButtonStyled variant="contained" onClick={() => setOpenAddWarehouses(true)}>Add Cargo <PlusIcons/></ButtonStyled>
        </Toolbar>
    );
});

export default EnhancedTableToolbarItem;