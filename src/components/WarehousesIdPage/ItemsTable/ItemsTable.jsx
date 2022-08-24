import React from 'react';
import Table from "@mui/material/Table";
import EnhancedItemsTableHead from "../EnhancedItemsTableHead/EnhancedItemsTableHead";
import ItemsTableBody from "../ItemsTableBody/ItemsTableBody";

const ItemsTable = ({warehouseId, selected,items, headCells, handleSelectAllClick, getItems, isSelected, handleClick}) => {
    return (
        <div>
            <Table>
                <EnhancedItemsTableHead
                    items={items}
                    selected={selected}
                    headCells={headCells}
                    onSelectAllClick={handleSelectAllClick}
                />
                <ItemsTableBody
                    // warehouseId={warehouseId}
                    // getRows={getItems}
                    isSelected={isSelected}
                    handleClick={handleClick}
                    items={items}
                />
            </Table>
        </div>
    );
};

export default ItemsTable;