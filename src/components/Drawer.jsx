// import { FcHome, FcContacts, FcAbout } from "react-icons/fc";
// import { ImCross } from "react-icons/im"
// const Drawer = () => {
//     return (
//         <div id="drawer-navigation" class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-56 dark:bg-gray-800" >
//             <h5 id="drawer-navigation-label" class="text-base font-mono font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
//             <button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
//                 <ImCross />
//             </button>
//             <div class="py-4 overflow-y-auto">
//                 <ul class="space-y-2">
//                     <li>
//                         <a href="#" class="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <FcHome />
//                             <span class="ml-3">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" class="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <FcAbout />
//                             <span class="flex-1 ml-3 whitespace-nowrap">About</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" class="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <FcContacts />
//                             <span class="flex-1 ml-3 whitespace-nowrap">Contact</span>
//                         </a>
//                     </li>

//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Drawer;


import React, { useState } from 'react';
import { FcHome, FcContacts, FcAbout } from "react-icons/fc";
import { ImCross } from "react-icons/im"

const Drawer = ( { position } ) => {
    // Declare a state variable for the position of the drawer (left or right)
    // const [position, setPosition] = useState('left');

    return (
        <div id="drawer-navigation" className={`fixed z-40 h-screen p-4 overflow-y-auto bg-white w-56 ${position === "left" ? '' : 'right-0'} dark:bg-gray-800`} >
            <h5 id="drawer-navigation-label" className="text-base font-mono font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
            <button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <ImCross />
            </button>
            <div className="py-4 overflow-y-auto">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FcHome />
                            <span className="ml-3">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FcAbout />
                            <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FcContacts />
                            <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;