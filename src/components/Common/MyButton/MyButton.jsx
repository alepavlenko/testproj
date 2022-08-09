import React from 'react';

import {Button} from "@mui/material";

const MyButton = ({variant, value, setOpen}) => {
    const handleOpen = () => setOpen(true);
    return (
        <div>
            <Button onClick={handleOpen} variant={variant}>{value}</Button>
        </div>
    );
};

export default MyButton;