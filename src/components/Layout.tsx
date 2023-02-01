import React from "react";
import { Link, Outlet } from "react-router-dom";
import NaviBar from "./navibar/NaviBar";

const Layout = () => {
    return (
        <>
            <NaviBar />
            <Outlet />
        </>
    )
}

export { Layout };