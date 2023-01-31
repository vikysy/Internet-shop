import { Link, Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NaviBar from "./navibar/NaviBar";

const Layout = () => {
    return (
        <>
            <NaviBar />
            <Outlet />
            <Footer />
        </>
    )
}

export { Layout };