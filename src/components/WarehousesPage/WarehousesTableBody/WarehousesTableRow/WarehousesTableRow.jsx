import React from 'react';

import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";

import style from "../../Warehouses/Warehouses.module.css";

const WarehousesTableRow = ({isItemSelected, row, handleClick, labelId, redirect}) => {
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
                onClick={() => redirect(row._id)}
            >
                {row.name}
            </TableCell>
            <TableCell align="left" onClick={() => redirect(row._id)}>
                {row.numberProduct}
            </TableCell>
            <TableCell align="left" onClick={() => redirect(row._id)}>
                {row.length}
            </TableCell>
            <TableCell align="left" onClick={() => redirect(row._id)}>
                {row.width}
            </TableCell>
            <TableCell align="left" onClick={() => redirect(row._id)}>
                {row.height}
            </TableCell>
        </TableRow>
    );
};

export default WarehousesTableRow;