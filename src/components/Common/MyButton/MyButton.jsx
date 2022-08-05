import React from 'react';
import {Button} from "@mui/material";
const MyButton = (props) => {
    return (
        <div>
            <Button variant={props.variant}>{props.value}</Button>
        </div>
    );
};

export default MyButton;