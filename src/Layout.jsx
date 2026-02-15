import React from "react";
import Header from "./componenets/heeader/Header";
import Footer from "./componenets/footer/Footer";
import { Outlet } from "react-router-dom";
function Layout({}){
    return (
        <>
        <header/>
        <Outlet/>
        <footer/>
        </>
    )
}
export default Layout