import React from 'react';

import {Button} from "@mui/material";

const MyButton = ({variant, value}) => {
    return (
        <div>
            <Button variant={variant}>{value}</Button>
        </div>
    );
};

export default MyButton;