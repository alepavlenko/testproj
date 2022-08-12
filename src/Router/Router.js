import React from "react";

import {MainPage} from "../components/MainPage";
import WarehousesPage from "../components/WarehousesPage/WarehousesPage";
import {BlockPage} from "../components/BlockPage/BlockPage";


export const privateRoutes = [
    {path: "/", element: <MainPage/>},
    {path: "/warehouses", element: <WarehousesPage/>},
    {path: "/Home", element: <BlockPage/>},
    {path: "/Accounts", element: <BlockPage/>},
    {path: "/Cards", element: <BlockPage/>},
    {path: "/Contacts", element: <BlockPage/>},
    {path: "/Chat", element: <BlockPage/>},

    // {path: "/warehouses/:id", element: <PostIdPage/>},
]

export const publicRoutes = [
    {path: "/", element: <MainPage/>},
]