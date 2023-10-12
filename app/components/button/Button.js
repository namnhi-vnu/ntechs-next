"use client";

const Button = ({ children, buttons, handlerShowModal }) => {
    return (
        <div className={buttons?.border} onClick={handlerShowModal}>
            {children}
        </div>
    );
};

export default Button;
