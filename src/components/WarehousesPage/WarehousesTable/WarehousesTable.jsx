import React from 'react';

import WarehousesTableBody from "../WarehousesTableBody/WarehousesTableBody";
import Table from "@mui/material/Table";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";

const WarehousesTable = ({selected,wareHouses, headCells, handleSelectAllClick, getRows, isSelected, handleClick}) => {

    return (
        <Table>
            <EnhancedTableHead
                wareHouses = {wareHouses}
                selected ={selected}
                headCells={headCells}
                onSelectAllClick={handleSelectAllClick}
            />
            <WarehousesTableBody
                getRows = {getRows}
                isSelected = {isSelected}
                handleClick = {handleClick}
                wareHouses = {wareHouses}
            />
        </Table>
    );
};

export default WarehousesTable;