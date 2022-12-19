import { Fragment, useState } from "react"
import Drawer from "../Drawer";
import tigeen from "../../assets/tigeen.png"
import NavTab from "../NavTab";
import { useSelector, useDispatch } from "react-redux";
import { actionType } from "../../store/action";

const Header = () => {
    const STATE = useSelector((state) => state);
    const {
        color,
        logoPosition,
        showHeader,
        showNavTab,
        showLeftDrawer,
        showRightDrawer
    } = STATE

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [drawerSide, setDrawerSide] = useState("");

    const handleDrawer = (side) => {
        setDrawerSide(side);
        setDrawerOpen(!isDrawerOpen);
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    return (
        <Fragment>
            {isDrawerOpen && drawerSide === "left" && <Drawer position="left" handleDrawerClose={handleDrawerClose} />}
            {isDrawerOpen && drawerSide === "right" && <Drawer position="right" handleDrawerClose={handleDrawerClose} />}
            {
                showHeader &&

                <div
                    className={`border-b-1 border-divider p-3 ${color === 'Blue ( #1976d2 )' ? "bg-blue" : "bg-red"}`}
                >
                    <div className="flex mx-16 my-3 pb-2 pt-2">
                        {
                            showLeftDrawer &&
                            <div className="mr-3">
                                <nav className="w-full px-6 py-1 border-gray-200 lg:px-0 cursor-pointer">
                                    <svg onClick={() => handleDrawer("left")}
                                        className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </nav>
                            </div>
                        }


                        <div style={{ width: "100%" }}
                            className={`flex ${logoPosition === 'left' ? 'justify-start' :
                                logoPosition === 'right' ? 'justify-end' :
                                    logoPosition === 'center' ? 'justify-center' : ''}`}>
                            <img className={logoPosition === "disable" ? "hidden" : ""} src={tigeen} alt="logo" />
                        </div>


                        {
                            showRightDrawer &&
                            <div className="ml-3">
                                <nav className="w-full px-6 py-1 border-gray-200 lg:px-0 cursor-pointer">
                                    <svg onClick={() => handleDrawer("right")}
                                        className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </nav>
                            </div>
                        }
                    </div>
                    {
                        showNavTab && <NavTab />
                    }

                </div>
            }
        </Fragment >
    )
}

export default Header;