import React, {memo} from 'react';

import Typography from "@mui/material/Typography";
import {ButtonStyled} from "./EnhancedTableToolbar.style";
import PlusIcons from "../../Common/Icons/PlusIcons";
import Toolbar from "@mui/material/Toolbar";

interface EnhancedTableToolbarProps{
    setOpenAddWarehouses: (value: boolean) => void
}

const EnhancedTableToolbar = memo(({setOpenAddWarehouses}: EnhancedTableToolbarProps) => {
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
                Warehouses
            </Typography>
            <ButtonStyled variant="contained" onClick={() =>setOpenAddWarehouses(true)}>Add Warehouses <PlusIcons/></ButtonStyled>
        </Toolbar>
    );
});

export default EnhancedTableToolbar;