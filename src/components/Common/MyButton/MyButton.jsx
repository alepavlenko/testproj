import React from 'react';

import {Button} from "@mui/material";

const MyButton = ({variant, value, onClick}) => {
    return (
        <div>
            <Button onClick={onClick} variant={variant}>{value}</Button>
        </div>
    );
};
export default MyButton;