import React from 'react';

import WarehousesTableBody from "../WarehousesTableBody/WarehousesTableBody";
import Table from "@mui/material/Table";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";

const WarehousesTable = ({selected, headCells, handleSelectAllClick, wareHouses, isSelected, handleClick}) => {

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