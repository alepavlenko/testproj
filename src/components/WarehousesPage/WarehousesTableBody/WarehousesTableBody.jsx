import React from 'react';

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";

import style from "../Warehouses/Warehouses.module.css";
import {useNavigate} from "react-router-dom";

const WarehousesTableBody = ({getRows, isSelected, handleClick, wareHouses}) => {

    const navigate = useNavigate()

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
                            onClick={() => {navigate(`/warehouses/${row.id}`, {replace: true})}}
                        >
                            {row.name}
                        </TableCell>
                        <TableCell
                            align="left"
                            onClick={() => {navigate(`/warehouses/${row.id}`, {replace: true})}}
                        >
                            {row.wirehousesNumber}
                        </TableCell>
                        <TableCell
                            align="left"
                            onClick={() => {navigate(`/warehouses/${row.id}`, {replace: true})}}
                        >
                            {row.length}
                        </TableCell>
                        <TableCell
                            align="left"
                            onClick={() => {navigate(`/warehouses/${row.id}`, {replace: true})}}
                        >
                            {row.width}
                        </TableCell>
                        <TableCell
                            align="left"
                            onClick={() => {navigate(`/warehouses/${row.id}`, {replace: true})}}
                        >
                            {row.height}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default WarehousesTableBody;