import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { basket } from "../pages/Basket";
import NaviBar from "./navibar/NaviBar";

const Layout = () => {
    const [basketLength, setBasketLength] = useState(findBasketLength);

    useEffect(() => {
        setBasketLength(() => findBasketLength());
    }, [document.addEventListener('click', () => setBasketLength(() => findBasketLength()))]);

    function findBasketLength() {
        return basket.reduce((sum, current) => sum + current.count, 0);
    }

    return (
        <>
            <NaviBar basketLength={basketLength}/>
            <Outlet />
        </>
    )
}

export { Layout };