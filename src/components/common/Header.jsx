import { Fragment, useState } from "react"
import Drawer from "../Drawer";
import tigeen from "../../assets/tigeen.png"

const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    

    const handleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);

    }


    const activeTab = "Tab One"
    return (
        <Fragment>
            {
                isDrawerOpen && <Drawer position={"left"} />
            }
            {
                isDrawerOpen && <Drawer position={"right"} />
            }
            <div class="border-b-1 border-divider p-3 bg-[rgb(25,118,211)]">
                <div class="">
                    <div className="flex">
                        <nav class="w-full px-6 py-1 border-gray-200 lg:px-0">
                            <svg onClick={() => handleDrawer()}
                                class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                        </nav>
                        <img src={tigeen} alt="logo" />
                        <nav class="w-full px-6 py-1 border-gray-200 lg:px-0">
                            <svg onClick={() => handleDrawer()}
                                class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                        </nav>
                    </div>
                    <div class=" md:block md:ml-10 md:pr-4">
                        <a href="#" style={{ borderBottom: "4px solid white" }} class="p-3 font-medium font-mono text-white uppercase border-b-4 ml-3 ">Tab One</a>
                        <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Tab Two</a>
                        <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Tab Three</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;