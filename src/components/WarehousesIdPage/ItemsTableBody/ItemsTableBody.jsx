import React from 'react';
import TableRow from "@mui/material/TableRow";
import style from "../../WarehousesPage/Warehouses/Warehouses.module.css";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";

const ItemsTableBody = ({getRows, isSelected, handleClick, wareHouses}) => {
    return (
        <TableBody>
            {getRows(wareHouses).map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        className={style.wrapRow}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                onClick={(event) => handleClick(event, row.id)}
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
                            {row.wirehousesNumber}
                        </TableCell>
                        <TableCell
                            align="left">
                            {row.length}
                        </TableCell>
                        <TableCell align="left">
                            {row.width}
                        </TableCell>
                        <TableCell align="left">
                            {row.height}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ItemsTableBody;