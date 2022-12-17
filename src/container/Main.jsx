import { Fragment, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AllRoutes from "../routes/AllRoutes";

const Main = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <h1 className="bg-red-800 text-bold font-mono text-white text-4xl" >Main container App</h1>
                <AllRoutes />
                <Footer />
            </BrowserRouter>

        </Fragment>
    )
}

export default Main;