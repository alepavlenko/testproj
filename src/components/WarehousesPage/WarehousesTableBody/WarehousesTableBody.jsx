import React from 'react';

import TableBody from "@mui/material/TableBody";

import {useNavigate} from "react-router-dom";
import WarehousesTableRow from "./WarehousesTableRow/WarehousesTableRow";

const WarehousesTableBody = ({wareHouses, isSelected, handleClick,}) => {

    const navigate = useNavigate()

    const redirect = (id) => navigate(`/warehouses/${id}`, {replace: true})
    return (
        <TableBody>
            {wareHouses.map((row, index) => {
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