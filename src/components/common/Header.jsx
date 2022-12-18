import { Fragment, useState } from "react"
import Drawer from "../Drawer";
import tigeen from "../../assets/tigeen.png"
import NavTab from "../NavTab";
import { useSelector, useDispatch } from "react-redux";
import { actionType } from "../../store/action";

const Header = () => {
    const STATE = useSelector((state) => state);  
    const dispatch = useDispatch();

      console.log(STATE)
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const [logoPosition, setLogoPosition] = useState("left");

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
            <button onClick={()=>dispatch({type:actionType.COLOR , payload: "red" })}> button</button>
            <div style={{backgroundColor: STATE.color === "blue" ? "blue" : "red" }} 
            // className="border-b-1 border-divider p-3 bg-[rgb(25,118,211)]"

            >
                <div className="flex mx-16 my-4 pb-7 pt-3">
                    <div className="mr-3">
                        <nav className="w-full px-6 py-1 border-gray-200 lg:px-0">
                            <svg onClick={() => {handleDrawer()
                            //  dispatch( {type:actionType.SHOW_HEADER, payload:!STATE.showHeader}) 
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

                <NavTab />
            </div>
        </Fragment >
    )
}

export default Header;