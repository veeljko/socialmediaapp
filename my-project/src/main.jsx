import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from "./router/MainRouter.jsx";
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <AuthContextProvider >
        <RouterProvider router={MainRouter}/>
    </AuthContextProvider >
)
