import React from 'react';

import {Button} from "@mui/material";

interface MyButtonProps {
    variant: "text" | "outlined" | "contained" | undefined
    value: string
    onClick: (value: boolean) => void

}

const MyButton = ({variant, value, onClick}: MyButtonProps) => {
    return (
        <div>
            <Button onClick={() => onClick(true)} variant={variant}>{value}</Button>
        </div>
    );
};
export default MyButton;