"use client";

import { setShowModal } from "../../store/reducer/action";

const Button = ({ children, buttons, dispatch }) => {
    const handlerShow = () => {
        dispatch(setShowModal());
    };
    return (
        <div className={buttons?.border} onClick={handlerShow}>
            {children}
        </div>
    );
};

export default Button;
