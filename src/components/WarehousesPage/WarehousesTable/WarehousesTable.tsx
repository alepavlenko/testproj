import React from 'react';

import WarehousesTableBody from "../WarehousesTableBody/WarehousesTableBody";
import Table from "@mui/material/Table";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";

interface WarehousesTableProps{
    selected: string[]
    wareHouses: any
    headCells: string[]
    handleSelectAllClick: any
    isSelected: (name: string) => boolean
    handleClick: any
}

const WarehousesTable = ({selected, headCells, handleSelectAllClick, wareHouses, isSelected, handleClick}: WarehousesTableProps) => {
    return (
        <Table>
            <EnhancedTableHead
                wareHouses={wareHouses}
                selected={selected}
                headCells={headCells}
                onSelectAllClick={handleSelectAllClick}
            />
            <WarehousesTableBody
                wareHouses={wareHouses}
                isSelected={isSelected}
                handleClick={handleClick}
            />
        </Table>
    );
};

export default WarehousesTable;