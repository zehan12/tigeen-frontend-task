import { Fragment, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AllRoutes from "../routes/AllRoutes";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "./style.scss"

const Main = () => {

    return (
        <Fragment>
            <Provider store={store} >
                <BrowserRouter>
                <h1 className="bg-red">lwqporjoewi</h1>
                    <Header />
                    <AllRoutes />
                    <Footer />
                </BrowserRouter>
            </Provider>
        </Fragment>
    )
}

export default Main;