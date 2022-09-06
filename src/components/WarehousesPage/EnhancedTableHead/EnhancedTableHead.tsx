import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableHead from "@mui/material/TableHead";
import {warehousesItem} from "../../../types/warehouse";

interface EnhancedTableHeadProps{
    wareHouses: warehousesItem[]
    selected: string[]
    onSelectAllClick: () => void
    headCells: string[]
}

const EnhancedTableHead = ({wareHouses, selected, onSelectAllClick, headCells}: EnhancedTableHeadProps) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={selected.length > 0 && selected.length < wareHouses.length}
                        checked={wareHouses.length > 0 && selected.length === wareHouses.length}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell key={headCell} align='left'>
                        <TableSortLabel>{headCell}</TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default EnhancedTableHead;