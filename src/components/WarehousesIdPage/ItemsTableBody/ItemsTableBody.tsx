import React from 'react';

import TableBody from "@mui/material/TableBody";
import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";

import AirPlane from "../../Common/Icons/AirPlane";
import Ship from "../../Common/Icons/Ship";
import Car from "../../Common/Icons/Car";
import {ProductsItem} from "../../../types/products";

interface ItemsTableBodyProps {
    isSelected: (name: string) => boolean
    handleClick: (e: React.MouseEvent, row: string) => void
    items: ProductsItem[]
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
            {items.map((row: ProductsItem, index: number) => {
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