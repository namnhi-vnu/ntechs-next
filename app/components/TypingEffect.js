"use client";

import { TypeAnimation } from "react-type-animation";

const TypingEffect = ({ style, typing }) => {
    return (
        <div>
            {/* Render your typing effect elements here */}
            <h2 className={style}>
                <TypeAnimation
                    sequence={typing}
                    wrapper="span"
                    speed={70}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                />
            </h2>
        </div>
    );
};

export default TypingEffect;
