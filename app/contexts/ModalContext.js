"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [showModal, setModal] = useState(false);
    const [hidenBody, setHidenBody] = useState(false);

    const [getFullName, setFullName] = useState("");
    const [getPhoneNumber, setPhoneNumber] = useState("");
    const [showAlert, setAlert] = useState(false);
    useEffect(() => {
        const body = document.body;
        hidenBody
            ? body.classList.add("overflow-y-hidden", "active")
            : body.classList.remove("overflow-y-hidden", "active");
    }, [hidenBody]);

    const handlerShowModal = () => {
        setModal(() => !showModal);
        setHidenBody(() => !hidenBody);
    };

    const handlergetFullName = (value) => {
        setFullName(value);
    };
    const handlergetPhone = (value) => {
        setPhoneNumber(value);
    };

    const handlerSendMessage = async () => {
        try {
            if (getFullName !== "" && getPhoneNumber !== "") {
                const res = await axios.post(
                    "https://ntechs-api.vercel.app/api/send-mail",
                    {
                        Fullname: getFullName,
                        phoneNumber: getPhoneNumber,
                        emailAddress: "nomail@gmail.com",
                    }
                );
                setFullName("");
                setPhoneNumber("");
                setModal(() => !showModal);
                setHidenBody(() => !hidenBody);
            } else if (getFullName === "" && getPhoneNumber === "") {
                setAlert(true);
            }
        } catch (error) {}
    };

    const value = {
        handlerShowModal,
        showModal,
        hidenBody,
        getFullName,
        getPhoneNumber,
        handlergetFullName,
        handlergetPhone,
        handlerSendMessage,
        showAlert,
    };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};

export { ModalProvider, ModalContext };
