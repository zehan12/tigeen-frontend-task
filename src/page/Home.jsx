import { Fragment, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../store/action";
import NoData from "../components/NoData";

const Home = () => {
    const STATE = useSelector((state) => state);
    const {
        logoPosition,
        color,
        showHeader,
        showFooter,
        showNavTab,
        showFooterNav,
        showLeftDrawer,
        showRightDrawer,
        currentStep,
        showOverlay
    } = STATE
    const dispatch = useDispatch();

    const steps = [
        0,
        1,
        2
    ]

    const handleNext = () => {
        dispatch({ type: actionType.CURRENT_STEP, payload: currentStep + 1 })
    };

    const handlePrev = () => {
        dispatch({ type: actionType.CURRENT_STEP, payload: currentStep - 1 })
    };

    const handleChange = ({ target }) => {
        let { name, value } = target
        if (name === "logoPosition") {
            dispatch({ type: actionType.LOGO_POSITION, payload: value })
        }
        if (name === "color") {
            dispatch({ type: actionType.COLOR, payload: value })
        }
    }


    return (
        <Fragment>
            <div style={{ width: "40%", border: "1px solid #d0cfcf" }} className="mx-auto h-full m-1   border-gray-500">

                <div className="mx-14 my-4">
                    <div>
                        <h2 className="sr-only">Steps</h2>
                        <div
                            className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
                        >
                            <ol
                                className="relative z-10 flex justify-between text-sm font-medium text-gray-500"
                            >
                                <li className="flex items-center p-2" >
                                    <div
                                        className={`rounded-full p-2 ${currentStep === 0 ? "bg-[#127ff3]" : "bg-[#A0A0A0]"}`}
                                    > <HiPencil color="white" size={20} /></div>
                                </li>
                                <li className="flex items-center p-2" >
                                    <div
                                        className={`rounded-full p-2 ${currentStep === 1 ? "bg-[#127ff3]" : "bg-[#A0A0A0]"}`}
                                    > <IoMdSettings color="white" size={20} /></div>
                                </li>
                                <li className="flex items-center p-2" >

                                    <div
                                        className={`rounded-full p-2 ${currentStep === 2 ? "bg-[#127ff3]" : "bg-[#A0A0A0]"}`}
                                    > <FaRegPlayCircle color="white" size={20} /></div>

                                </li>
                            </ol>
                        </div>
                    </div>
                </div>




                <hr style={{ border: "0.3px solid #d0cfcf" }} />

                {currentStep === 0 ?
                    <div style={{ width: "100%" }} className=" font-sans text-sm font-normal">
                        <div style={{ width: "70%" }} className="form-control font-sans ml-10 my-3">
                            <label id="demo-row-radio-buttons-group-label" className="form-label">I Want to Company Logo</label>
                            <div className="flex items-center justify-between w-full">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="logoPosition" value="left" onChange={handleChange} checked={logoPosition === 'left'} />
                                    <span className="ml-2">Left</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="logoPosition" value="right" onChange={handleChange} checked={logoPosition === 'right'} />
                                    <span className="ml-2">Right</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="logoPosition" value="center" onChange={handleChange} checked={logoPosition === 'center'} />
                                    <span className="ml-2">Center</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="logoPosition" value="disabled" onChange={handleChange} checked={logoPosition === 'disabled'} />
                                    <span className="ml-2">Disable</span>
                                </label>
                            </div>
                        </div>

                        <div style={{ width: "70%" }} className="form-control font-sans ml-10 my-3 mt-7 text-sm" >
                            <label id="demo-row-radio-buttons-group-label" className="form-label">Preset Color</label>
                            <div className="flex items-center w-full justify-start">
                                <label className="inline-flex items-center mr-7">
                                    <input type="radio" className="form-radio" name="color" value="blue" onChange={handleChange} checked={color === 'blue'} />
                                    <span className="ml-2">Blue ( #1976d2 )</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="color" value="red" onChange={handleChange} checked={color === 'red'} />
                                    <span className="ml-2">Red ( #ff0000 )</span>
                                </label>
                            </div>
                            <label id="demo-row-radio-buttons-group-label" className="form-label">Preset Apply only : Header Background, Button, Radio Button & Switch</label>
                        </div>

                        <div className="flex flex-col my-3 ml-8">
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={() => dispatch({ type: actionType.SHOW_HEADER, payload: !showHeader })}
                                        checked={showHeader} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I Want a Header</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={(e) => dispatch({ type: actionType.SHOW_FOOTER, payload: !showFooter })}
                                        checked={showFooter} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I Want a Footer</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={() => dispatch({ type: actionType.SHOW_OVERLAY, payload: !showOverlay })} checked={showOverlay} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I want a Drawer overlay mode(requires header or footer)</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={() => dispatch({ type: actionType.SHOW_LEFT_DRAWER, payload: !showLeftDrawer })} checked={showLeftDrawer} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I want a left-side Drawer</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={() => dispatch({ type: actionType.SHOW_RIGHT_DRAWER, payload: !showRightDrawer })} checked={showRightDrawer} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I want a Right-side Drawer</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={(e) => dispatch({ type: actionType.SHOW_NAV_TAB, payload: !showNavTab })} checked={showNavTab} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I want Navigation Tabs(requires Header)</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center space-x-4 cursor-pointer ">
                                <span className="relative">
                                    <input onChange={() => dispatch({ type: actionType.SHOW_FOOTER_NAV, payload: !showFooterNav })} checked={showFooterNav} type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                                </span>
                                <span>I want a Bottom menu(requires Footer)</span>
                            </label>

                        </div>
                    </div> : <NoData />
                }



                <div>
                    <hr className="mx-10" />
                    <div className="my-2 flex justify-between">

                        {currentStep > 0 && (

                            <button
                                onClick={handlePrev}
                                class="group relative inline-flex items-center overflow-hidden uppercase bg-[#1D74D1] px-4 py-2 text-white focus:outline-none focus:ring active:bg-[##1D74D1] mx-6 my-5"
                            >
                                previous
                            </button>
                        )}

                        {
                            currentStep === 2 && (
                                <button
                                    class="group relative inline-flex items-center overflow-hidden uppercase bg-[#1D74D1] px-4 py-2 text-white focus:outline-none focus:ring active:bg-[##1D74D1] mx-6 my-5 disabled cursor-not-allowed"
                                >
                                    finish
                                </button>
                            )
                        }

                        {currentStep < steps.length - 1 && (
                            <button
                                onClick={handleNext}
                                class="group relative inline-flex items-center overflow-hidden uppercase bg-[#1D74D1] px-4 py-2 text-white focus:outline-none focus:ring active:bg-[##1D74D1] mx-6 my-5"
                            >
                                continue
                            </button>

                        )}
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
export default Home;