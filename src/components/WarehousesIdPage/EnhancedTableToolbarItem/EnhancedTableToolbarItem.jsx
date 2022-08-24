import React, {useContext, useEffect} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {ButtonStyled} from "../../WarehousesPage/EnhancedTableToolbar/EnhancedTableToolbar.style";
import PlusIcons from "../../Common/Icons/PlusIcons";
import {Context} from "../../../App";
import {getRows} from "../../../utils/gettingRowsWarehouses";

const EnhancedTableToolbarItem = ({setOpenAddWarehouses, warehouseId}) => {
    const {wareHouses, setWareHouses, setIsAuth, token} = useContext(Context)

    // useEffect(() => {
    //
    // }, [])
    const localWare = wareHouses.filter((item) =>  item._id === warehouseId)

    // const {wareHouses} = useContext(Context)
    // const localWare = wareHouses.filter((item) =>  item._id === warehouseId)
    // console.log('localWare[0].name',localWare)
    // console.log('wareHouses',wareHouses)

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
                    <div>Warehouses: {localWare[0].name}</div>
                }
            </Typography>
            <ButtonStyled variant="contained" onClick={setOpenAddWarehouses}>Add Cargo <PlusIcons/></ButtonStyled>
        </Toolbar>
    );
};

export default EnhancedTableToolbarItem;