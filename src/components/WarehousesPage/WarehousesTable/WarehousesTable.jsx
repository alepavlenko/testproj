import React from 'react';

import WarehousesTableBody from "../WarehousesTableBody/WarehousesTableBody";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";

const WarehousesTable = ({wareHouses, headCells, handleSelectAllClick, getRows, isSelected, handleClick}) => {

    function EnhancedTableHead({onSelectAllClick}) {
        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={'left'}
                        >
                            <TableSortLabel>
                                {headCell.label}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }

    return (
        <Table>
            <EnhancedTableHead
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