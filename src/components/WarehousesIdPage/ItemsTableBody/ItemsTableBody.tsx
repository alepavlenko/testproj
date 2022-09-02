import React from 'react';

import TableBody from "@mui/material/TableBody";
import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";

import AirPlane from "../../Common/Icons/AirPlane";
import Ship from "../../Common/Icons/Ship";
import Car from "../../Common/Icons/Car";

interface ItemsTableBodyProps {
    isSelected: (name: string) => boolean
    handleClick: any
    items: any
}

interface itemsInterface{
    name: string
    manufacturer: string
    itemNumber: number
    purchasing: string
    shipment: string
    warehouse: string
    user: string
    _id: string
}

const ItemsTableBody = ({isSelected, handleClick, items}: ItemsTableBodyProps) => {
    function rowIcons(row: string) {
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
            {items.map((row: itemsInterface, index: string) => {
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