"use client";

const Button = ({ children, buttons }) => {
    return <div className={buttons?.border}>{children}</div>;
};

export default Button;
