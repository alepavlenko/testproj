import React from "react";

import {MainPage} from "./components/MainPage";
import {BlockPage} from "./components/BlockPage/BlockPage";
import WarehousesPage from "./components/WarehousesPage/WarehousesPage";
import {Routes} from '../src/constants';
import WarehousesIdPage from "./components/WarehousesIdPage/WarehousesIdPage";


export const privateRoutes = [
    {path: "/", element: <MainPage/>},
    {path: Routes.WAREHOUSES, element: <WarehousesPage/>},
    {path: Routes.HOME, element: <BlockPage/>},
    {path: Routes.ACCOUNTS, element: <BlockPage/>},
    {path: Routes.CARDS, element: <BlockPage/>},
    {path: Routes.CONTACTS, element: <BlockPage/>},
    {path: Routes.CHAT, element: <BlockPage/>},
    {path: "/warehouses/:id", element: <WarehousesIdPage/>},
]

export const publicRoutes = [
    {path: "/", element: <MainPage/>},
]