import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";

import style from "../../../WarehousesPage/Warehouses/Warehouses.module.css";

interface ProductsTableRowProps {
    isItemSelected: boolean
    handleClick: any
    row: rowProps
    labelId: string
    rowIcons: any
        // (value: string): JSX.Element
}

interface rowProps{
    name: string
    manufacturer: string
    itemNumber: number
    purchasing: string
    shipment: string
    warehouse: string
    user: string
    _id: string
}

const ProductsTableRow = ({isItemSelected, handleClick, row, labelId, rowIcons}: ProductsTableRowProps) => {
    return (
        <TableRow
            hover
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row._id}
            selected={isItemSelected}
            className={style.wrapRow}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    onClick={(event) => handleClick(event, row._id)}
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                        'aria-labelledby': labelId,
                    }}
                />
            </TableCell>
            <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
            >
                {row.name}
            </TableCell>
            <TableCell align="left">
                {row.manufacturer}
            </TableCell>
            <TableCell
                align="left">
                {row.itemNumber}
            </TableCell>
            <TableCell align="left">
                {row.purchasing}
            </TableCell>
            <TableCell align="left">
                <div className={style.wrapRowIcons}>
                    {rowIcons(row.shipment.toUpperCase())}
                    {row.shipment.toUpperCase()}
                </div>
            </TableCell>
        </TableRow>
    );
};

export default ProductsTableRow;