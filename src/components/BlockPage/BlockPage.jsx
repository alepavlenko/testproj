import React from "react";

import NavBar from "../MainPage/NavBar/NavBar";

import style from './BlockPage.module.css'
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const BlockPage = () => {
    return (
        <div className={style.main}>
            <NavBar/>
            <Link to={'/warehouses'}>
                <Button variant={'contained'}> Back </Button>
            </Link>
        </div>
    );
}
