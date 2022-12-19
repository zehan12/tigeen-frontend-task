import { Fragment, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../store/action";
import NoData from "../components/NoData";
import Checkbox from "../components/Checkbox";
import RadioButtonGroup from "../components/RadioButtonGroup";
import Button from "../components/Button";
import Step from "../components/Step";

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


    return (
        <Fragment>
            <div style={{ width: "40%", border: "1px solid #d0cfcf" }} className="mx-auto h-full m-1   border-gray-500">

                <div className="mx-14 my-4">
                    <div>
                        <h2 className="sr-only">Steps</h2>
                        <div
                            className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
                        >
                            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
                                <Step currentStep={currentStep} index={0} icon={<HiPencil color="white" size={20} />} />
                                <Step currentStep={currentStep} index={1} icon={<IoMdSettings color="white" size={20} />} />
                                <Step currentStep={currentStep} index={2} icon={<FaRegPlayCircle color="white" size={20} />} />
                            </ol>
                        </div>
                    </div>
                </div>

                <hr style={{ border: "0.3px solid #d0cfcf" }} />

                {currentStep === 0 ?
                    <div style={{ width: "100%" }} className=" font-sans text-sm font-normal">
                        <div style={{ width: "80%" }} className="form-control font-sans flex flex-col justify-start mr-0">
                            <RadioButtonGroup
                                name="I Want to Company Logo"
                                options={['left', 'right', 'center', 'disable']}
                                value={logoPosition}
                                onChange={(e) => dispatch({ type: actionType.LOGO_POSITION, payload: e.target.name })}
                            />
                            <RadioButtonGroup
                                name="Preset Color"
                                options={['Blue ( #1976d2 )', 'Red ( #ff0000 )']}
                                value={color}
                                onChange={(e) => dispatch({ type: actionType.COLOR, payload: e.target.name })}
                            />
                            <p className="ml-9">Preset apply only : Header background, Button, Radio Button & switch</p>
                        </div>
                        <div className="flex flex-col my-3 ml-8">
                            <Checkbox
                                name="I want a Header"
                                value={showHeader}
                                onChange={() => dispatch({ type: actionType.SHOW_HEADER, payload: !showHeader })}
                            />
                            <Checkbox
                                name="I want a Footer"
                                value={showFooter}
                                onChange={() => dispatch({ type: actionType.SHOW_FOOTER, payload: !showFooter })}
                            />
                            <Checkbox
                                name="I want a Drawer Overlay Mode(requires Header or Footer)"
                                value={showOverlay}
                                onChange={() => dispatch({ type: actionType.SHOW_OVERLAY, payload: !showOverlay })}
                            />
                            <Checkbox
                                name="I want a left-side Drawer"
                                value={showLeftDrawer}
                                onChange={() => dispatch({ type: actionType.SHOW_LEFT_DRAWER, payload: !showLeftDrawer })}
                            />
                            <Checkbox
                                name="I want a right-side Drawer"
                                value={showRightDrawer}
                                onChange={() => dispatch({ type: actionType.SHOW_RIGHT_DRAWER, payload: !showRightDrawer })}
                            />
                            <Checkbox
                                name="I want navigation tabs(requires Header)"
                                value={showNavTab}
                                onChange={() => dispatch({ type: actionType.SHOW_NAV_TAB, payload: !showNavTab })}
                            />
                            <Checkbox
                                name="I want a Bottom Menu (requires Footer)"
                                value={showFooterNav}
                                onChange={() => dispatch({ type: actionType.SHOW_FOOTER_NAV, payload: !showFooterNav })}
                            />

                        </div>
                    </div> : <NoData />
                }


                <div>
                    <hr className="mx-10" />
                    <div className="my-2 flex justify-between">
                        {currentStep > 0 && (
                            <Button onClick={handlePrev}>previous</Button>
                        )}
                        {currentStep === 2 && (
                            <Button disabled>finish</Button>
                        )}
                        {currentStep < steps.length - 1 && (
                            <Button onClick={handleNext}>continue</Button>
                        )}
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
export default Home;