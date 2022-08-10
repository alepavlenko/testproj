import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const WarehousesPage = () => {
    return (
        <div>

            <Link to={'/'}> <Button variant='contained' >Back</Button> </Link>
        </div>
    );
};

export default WarehousesPage;