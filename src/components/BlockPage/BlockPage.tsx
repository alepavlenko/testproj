import React from "react";
import {Link} from "react-router-dom";

import NavBar from "../MainPage/NavBar/NavBar";
import {Button} from "@mui/material";

import style from './BlockPage.module.css'
import {Routes} from "../../constants";

export const BlockPage = () => {
    return (
        <div className={style.main}>
            <NavBar/>
            <Link to={Routes.WAREHOUSES}>
                <Button variant='contained'> Back </Button>
            </Link>
        </div>
    );
}
