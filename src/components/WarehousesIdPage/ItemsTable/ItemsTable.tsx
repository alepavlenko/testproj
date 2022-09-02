import React from 'react';

import Table from "@mui/material/Table";
import EnhancedItemsTableHead from "../EnhancedItemsTableHead/EnhancedItemsTableHead";
import ItemsTableBody from "../ItemsTableBody/ItemsTableBody";

interface ItemsTableProps {
    selected: string[]
    items: any
    headCells: string[]
    handleSelectAllClick: any
    isSelected: (name: string) => boolean
    handleClick: any
    // (value: Event) => string[]
}

const ItemsTable = ({selected, items, headCells, handleSelectAllClick, isSelected, handleClick}: ItemsTableProps) => {
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