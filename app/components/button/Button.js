"use client";

import { setSendModal } from "../../store/reducer/action";

const Button = ({ children, buttons, dispatch }) => {
    return (
        <div
            className={buttons?.border}
            onClick={() => dispatch(setSendModal())}
        >
            {children}
        </div>
    );
};

export default Button;
