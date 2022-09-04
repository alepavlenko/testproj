import React from 'react';
import {useNavigate} from "react-router-dom";

import TableBody from "@mui/material/TableBody";
import WarehousesTableRow from "./WarehousesTableRow/WarehousesTableRow";

interface WarehousesTableBody{
    wareHouses: any
    isSelected: (name: string) => boolean
    handleClick: any
}

interface warehousesIterElem {
    name: string
    numberProduct: string
    length: number
    width: number
    height: number
    user: string
    _id: string
}


const WarehousesTableBody = ({wareHouses, isSelected, handleClick,}: WarehousesTableBody) => {

    const navigate = useNavigate()

    const redirect = (id: string) => navigate(`/warehouses/${id}`, {replace: true})
    return (
        <TableBody>
            {wareHouses.map((row: warehousesIterElem, index: string) => {
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