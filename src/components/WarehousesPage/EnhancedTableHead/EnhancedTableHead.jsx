import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableHead from "@mui/material/TableHead";
import {getRows} from "../../../utils/gettingRowsWarehouses";


const EnhancedTableHead = ({wareHouses,selected,onSelectAllClick, headCells}) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={selected.length > 0 && selected.length < getRows(wareHouses).length}
                        checked={getRows(wareHouses).length > 0 && selected.length === getRows(wareHouses).length }
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