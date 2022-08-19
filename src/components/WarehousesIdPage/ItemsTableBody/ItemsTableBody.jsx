import React from 'react';
import TableRow from "@mui/material/TableRow";
import style from "../../WarehousesPage/Warehouses/Warehouses.module.css";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";
import AirPlane from "../../Common/Icons/AirPlane";
import Ship from "../../Common/Icons/Ship";
import Car from "../../Common/Icons/Car";

const ItemsTableBody = ({warehouseId, getRows, isSelected, handleClick, wareHouses}) => {

   function rowIcons(row) {
       switch (row) {
           case 'AIR':
               return <AirPlane/>;
           case 'SEA':
               return <Ship/>;
           case 'CAR':
               return <Car/>
       }

   }

    return (
        <TableBody>
            {getRows(wareHouses,warehouseId).map((row, index) => {
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
                            {row.manufacturer}
                        </TableCell>
                        <TableCell
                            align="left">
                            {row.number}
                        </TableCell>
                        <TableCell align="left">
                            {row.purchasing}
                        </TableCell>
                        <TableCell align="left">
                            <div className={style.wrapRowIcons}>
                                {rowIcons(row.delivery.toUpperCase())}
                                {row.delivery.toUpperCase()}
                            </div>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ItemsTableBody;