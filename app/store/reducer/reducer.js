import {
    ALERT_MODAL,
    CLOSE_ALERT_MODAL,
    CLOSE_MODAL,
    GET_INPUT_MODAL,
    SEND_DATA_MODAL,
    SHOW_MODAL,
} from "./constants";

const initState = {
    showModal: false,
    hidenBody: false,
    getInputModal: {
        fullname: "",
        phone: "",
    },
    isLoadSendModal: false,
    showAlertModal: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                hidenBody: !state.showModal,
            };
        case GET_INPUT_MODAL:
            return {
                ...state,
                getInputModal: action.payload,
            };
        case SEND_DATA_MODAL:
            return {
                ...initState,
                isLoadSendModal: !state.isLoadSendModal,
            };
        case CLOSE_ALERT_MODAL:
            return {
                ...state,
                isLoadSendModal: !state.isLoadSendModal,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                hidenBody: !state.showModal,
                showAlertModal: false,
            };
        case ALERT_MODAL:
            return {
                ...state,
                showAlertModal: !state.showAlertModal,
            };
        default:
            throw new Error(`Invalid action ${action.type}`);
    }
};

export { initState };
export default reducer;
