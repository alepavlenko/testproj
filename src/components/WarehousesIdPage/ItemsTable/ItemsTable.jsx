import React from 'react';
import Table from "@mui/material/Table";
import EnhancedItemsTableHead from "../EnhancedItemsTableHead/EnhancedItemsTableHead";
import ItemsTableBody from "../ItemsTableBody/ItemsTableBody";

const ItemsTable = ({selected,items, headCells, handleSelectAllClick, getItems, isSelected, handleClick}) => {
    return (
        <div>
            <Table>
                <EnhancedItemsTableHead
                    wareHouses={items}
                    selected={selected}
                    headCells={headCells}
                    onSelectAllClick={handleSelectAllClick}
                />
                <ItemsTableBody
                    getRows={getItems}
                    isSelected={isSelected}
                    handleClick={handleClick}
                    wareHouses={items}
                />
            </Table>
        </div>
    );
};

export default ItemsTable;