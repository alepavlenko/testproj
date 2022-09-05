import React from 'react';
import {useNavigate} from "react-router-dom";

import TableBody from "@mui/material/TableBody";
import WarehousesTableRow from "./WarehousesTableRow/WarehousesTableRow";
import {warehousesItem} from "../../../types/warehouse";

interface WarehousesTableBody{
    wareHouses: warehousesItem[]
    isSelected: (name: string) => boolean
    handleClick: any
}

const WarehousesTableBody = ({wareHouses, isSelected, handleClick,}: WarehousesTableBody) => {

    const navigate = useNavigate()

    const redirect = (id: string) => navigate(`/warehouses/${id}`, {replace: true})
    return (
        <TableBody>
            {wareHouses.map((row: warehousesItem, index: number) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <WarehousesTableRow
                        isItemSelected={isItemSelected}
                        row={row}
                        handleClick={handleClick}
                        labelId={labelId}
                        redirect={redirect}
                    />
                );
            })}
        </TableBody>
    );
};

export default WarehousesTableBody;