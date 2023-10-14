import {
    ALERT_MODAL,
    CLOSE_ALERT_MODAL,
    CLOSE_MODAL,
    GET_INPUT_MODAL,
    SEND_DATA_MODAL,
    SHOW_MODAL,
} from "./constants";

export const setShowModal = (payload) => {
    return {
        type: SHOW_MODAL,
    };
};

export const setCloseModal = (payload) => {
    return {
        type: CLOSE_MODAL,
    };
};

export const setAlertModal = (payload) => {
    return {
        type: ALERT_MODAL,
    };
};

export const setCloseAlert = (payload) => {
    return {
        type: CLOSE_ALERT_MODAL,
    };
};

export const setInputModal = (payload) => {
    return {
        type: GET_INPUT_MODAL,
        payload,
    };
};

export const setSendModal = (payload) => {
    return {
        type: SEND_DATA_MODAL,
        payload,
    };
};
