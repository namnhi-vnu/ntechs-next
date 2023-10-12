"use client";
import { createContext, useEffect, useRef, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [showModal, setModal] = useState(false);
    const [hidenBody, setHidenBody] = useState(false);
    useEffect(() => {
        const body = document.body;
        hidenBody
            ? body.classList.add("overflow-y-hidden")
            : body.classList.remove("overflow-y-hidden");
    }, [hidenBody]);
    // const getBody = useRef(null)
    const handlerShowModal = () => {
        setModal(() => !showModal);
        setHidenBody(() => !hidenBody);
        // getBody.current.style;
    };
    const value = {
        handlerShowModal,
        showModal,
        hidenBody,
    };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};

export { ModalProvider, ModalContext };
