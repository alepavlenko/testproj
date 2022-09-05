import React from 'react';

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import {ProductsItem} from "../../../types/products";

interface EnhancedItemsTableHeadProps {
    selected: string[]
    headCells: string[]
    items: ProductsItem[]
    onSelectAllClick: any
}

const EnhancedItemsTableHead = ({items, selected, onSelectAllClick, headCells}: EnhancedItemsTableHeadProps) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={selected.length > 0 && selected.length < items.length}
                        checked={items.length > 0 && selected.length === items.length}
                        onChange={(e) => onSelectAllClick(e)}
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

export default EnhancedItemsTableHead;