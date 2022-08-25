import React from 'react';
import Table from "@mui/material/Table";
import EnhancedItemsTableHead from "../EnhancedItemsTableHead/EnhancedItemsTableHead";
import ItemsTableBody from "../ItemsTableBody/ItemsTableBody";

const ItemsTable = ({selected, items, headCells, handleSelectAllClick, isSelected, handleClick}) => {
    return (
        <Table>
            <EnhancedItemsTableHead
                items={items}
                selected={selected}
                headCells={headCells}
                onSelectAllClick={handleSelectAllClick}
            />
            <ItemsTableBody
                isSelected={isSelected}
                handleClick={handleClick}
                items={items}
            />
        </Table>
    );
};

export default ItemsTable;