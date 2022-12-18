import { Fragment, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";

const Home = () => {

    const [logoPosition, setlogoPosition] = useState('center');
    const [color, setColor] = useState("blue")

    const handleChange = ({ target }) => {
        let { name, value } = target
        if (name === "logoPosition") setlogoPosition(value);
        if (name === "color") setColor(value)
        //   dispatch({type:"Logo_POSITION", payload: value});
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
                                    <div className="bg-[#127ff3] rounded-full p-2"> <HiPencil color="white" size={20} /></div>
                                </li>
                                <li className="flex items-center p-2" >
                                    <div className="bg-[#A0A0A0] rounded-full p-2"> <IoMdSettings color="white" size={20} /></div>
                                </li>
                                <li className="flex items-center p-2" >

                                    <div className="bg-[#A0A0A0] rounded-full p-2"> <FaRegPlayCircle color="white" size={20} /></div>

                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <hr style={{ border: "0.3px solid #d0cfcf" }} />
                <div style={{ border: "1px solid black", width: "100%" }} className=" font-sans text-sm font-normal">
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

                    <div style={{width: "70%" }} className="form-control font-sans ml-10 my-3 mt-7 text-sm" >
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
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I Want a Header</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center space-x-4 cursor-pointer ">
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I Want a Footer</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center space-x-4 cursor-pointer ">
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I want a Drawer overlay mode(requaires header or footer)</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center space-x-4 cursor-pointer ">
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I want a left-side Drawer</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center space-x-4 cursor-pointer ">
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I want a Right-side Drawer</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center space-x-4 cursor-pointer ">
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I want Navigation Tabs(requaires Header)</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center space-x-4 cursor-pointer ">
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-[#7DB7E7]"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-gray-200 peer-checked:dark:bg-[#1D74D1]"></div>
                            </span>
                            <span>I want a Bottom menu(requaires Footer)</span>
                        </label>

                    </div>

                    <div>
                        <hr className="mx-10" />
                        <a
                            class="group relative inline-flex items-center overflow-hidden  bg-[#1D74D1] px-4 py-2 text-white focus:outline-none focus:ring active:bg-[##1D74D1] mx-6 my-5"
                            href="/download"
                        >
                            <span
                                class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                            >
                                <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>

                            <span class="text-sm font-medium transition-all uppercase group-hover:mr-4">
                                continue
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Home;