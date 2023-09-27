"use client";

import { TypeAnimation } from "react-type-animation";

const TypingEffect = () => {
    return (
        <div>
            {/* Render your typing effect elements here */}
            <h2 className="text-5ml font-bold text-hover leading-13 sm:text-md  max-md:text-[1.6em] max-md:leading-[1.5em]">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Thương mại điện tử",
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Giải pháp Mobile APP",
                        2000,
                        "Hệ thống ERP",
                        2000,
                        "Hệ thống Affiliate Marketing",
                        2000,
                        "Số 1 Việt Nam",
                        2000,
                    ]}
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
