import { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Two from "../page/Two";
import Three from "../page/Three";


const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;