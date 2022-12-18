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
        showNavTab
    } = STATE
    const dispatch = useDispatch();

    console.log(STATE)
    const [isDrawerOpen, setDrawerOpen] = useState(false);



    const handleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);

    }



    return (
        <Fragment>
            {
                isDrawerOpen && <Drawer position={"left"} />
            }
            {
                isDrawerOpen && <Drawer position={"right"} />

            }
            {
                showHeader &&

                <div
                    className={`border-b-1 border-divider p-3 ${color === "blue" ? "bg-blue" : "bg-red"}`}
                >
                    <div className="flex mx-16 my-3 pb-2 pt-2">
                        <div className="mr-3">
                            <nav className="w-full px-6 py-1 border-gray-200 lg:px-0">
                                <svg onClick={() => {
                                    handleDrawer()
                                    dispatch({ type: actionType.SHOW_HEADER, payload: !STATE.showHeader })
                                }}
                                    className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </nav>
                        </div>


                        <div style={{ width: "100%" }}
                            className={`flex ${logoPosition === 'left' ? 'justify-start' :
                                logoPosition === 'right' ? 'justify-end' :
                                    logoPosition === 'center' ? 'justify-center' : ''}`}>
                            <img className={logoPosition === "disabled" ? "hidden" : ""} src={tigeen} alt="logo" />
                        </div>


                        <div className="ml-3">
                            <nav className="w-full px-6 py-1 border-gray-200 lg:px-0">
                                <svg onClick={() => handleDrawer()}
                                    className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </nav>
                        </div>
                    </div>
                    {
                     showNavTab &&   <NavTab />
                    }

                </div>
            }
        </Fragment >
    )
}

export default Header;