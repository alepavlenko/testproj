import React from 'react';
import TableBody from "@mui/material/TableBody";
import AirPlane from "../../Common/Icons/AirPlane";
import Ship from "../../Common/Icons/Ship";
import Car from "../../Common/Icons/Car";
import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";

const ItemsTableBody = ({isSelected, handleClick, items}) => {

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
            {items.map((row, index) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <ProductsTableRow
                        isItemSelected={isItemSelected}
                        handleClick={handleClick}
                        row={row}
                        labelId={labelId}
                        rowIcons={rowIcons}
                    />
                );
            })}
        </TableBody>
    );
};

export default ItemsTableBody;