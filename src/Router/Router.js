import React from "react";

import {MainPage} from "../components/MainPage";
import WarehousesPage from "../components/WarehousesPage/WarehousesPage";


export const privateRoutes = [
    {path: "/", element: <MainPage/>},
    {path: "/warehouses", element: <WarehousesPage/>},
    // {path: "/warehouses/:id", element: <PostIdPage/>},
]

export const publicRoutes = [
    {path: "/", element: <MainPage/>},
]