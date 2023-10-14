"use client";
import { useEffect, useReducer, useState } from "react";
import reducer, { initState } from "../reducer/reducer";
import Context from "./Context";

const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { hidenBody } = state;

    useEffect(() => {
        const body = document.body;
        hidenBody
            ? body.classList.add("overflow-y-hidden", "active")
            : body.classList.remove("overflow-y-hidden", "active");
    }, [hidenBody]);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default ModalProvider;
