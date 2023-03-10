import { actionType } from "../store/action";

const initialState = {
    showHeader: true,
    showNavTab: true,
    logoPosition: "left",
    color: "Blue ( #1976d2 )",
    showLeftDrawer: true,
    showRightDrawer: true,
    showFooter: true,
    showFooterNav: true,
    currentStep: 0,
    showOverlay: false
}


const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOW_HEADER:
            state = { ...state, showHeader: action.payload }
            return state

        case actionType.SHOW_NAV_TAB:
            state = { ...state, showNavTab: action.payload }
            return state

        case actionType.LOGO_POSITION:
            state = { ...state, logoPosition: action.payload }
            return state

        case actionType.COLOR:
            state = { ...state, color: action.payload }
            return state

        case actionType.SHOW_LEFT_DRAWER:
            state = { ...state, showLeftDrawer: action.payload }
            return state

        case actionType.SHOW_RIGHT_DRAWER:
            state = { ...state, showRightDrawer: action.payload }
            return state

        case actionType.SHOW_FOOTER:
            state = { ...state, showFooter: action.payload }
            return state

        case actionType.SHOW_FOOTER_NAV:
            state = { ...state, showFooterNav: action.payload }
            return state
        case actionType.CURRENT_STEP:
            state = { ...state, currentStep: action.payload }
            return state
        case actionType.SHOW_OVERLAY:
            state = { ...state, showOverlay: action.payload }
            return state
        default:
            return state
    }
}
export default Reducers
