import { Fragment, useState } from "react"
import Drawer from "../Drawer";
import tigeen from "../../assets/tigeen.png"
import NavTab from "../NavTab";

const Header = () => {
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
            <div className="border-b-1 border-divider p-3 bg-[rgb(25,118,211)]">
                    <div className="flex">


                        <div style={{border:"2px solid black"}}>
                            <nav className="w-full px-6 py-1 border-gray-200 lg:px-0">
                                <svg onClick={() => handleDrawer()}
                                    className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </nav>
                        </div>


                        <div style={{border:"2px solid black"}} className="">
                            <img src={tigeen} alt="logo" />
                        </div>


                        <div style={{border:"2px solid black"}} className="flex justify-end">
                            <nav className="w-full px-6 py-1 border-gray-200 lg:px-0">
                                <svg onClick={() => handleDrawer()}
                                    className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </nav>
                        </div>

                    </div>
                    <NavTab />
            </div>
        </Fragment>
    )
}

export default Header;