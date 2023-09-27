"use client";

import { useEffect } from "react";
import AOS from "aos";
import TypingEffect from "./TypingEffect";
import Button from "./button/Button";
import { FaPhone, FaTelegram } from "react-icons/fa6";
import Link from "next/link";
const buttonsOutline = {
    border: "border-2 border-ntechs py-1 px-3 rounded-md flex items-center gap-2 text-ntechs transition transition-all cursor-pointer hover:bg-ntechs hover:text-white ",
};
const buttonFit = {
    border: "border-2 border-ntechs py-1 px-3 rounded-md flex items-center gap-2 text-white bg-ntechs transition-all  cursor-pointer hover:bg-white hover:text-ntechs",
};
const BannerHome = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="banner py-5">
                <div className="container mx-auto max-md:px-[1em]">
                    <div className="content flex items-center justify-between max-md:block ">
                        <div
                            className="sologan flex-1 "
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <h2 className="text-5ml font-bold text-ntechs leading-13 sm:text-md max-md:text-[1.6em] max-md:leading-[1.5em]">
                                <span className="text-hover">NT</span>echs -
                                Giải pháp Lập trình <br /> Web, APP Mobile, ERP
                                ...
                            </h2>
                            <TypingEffect />
                            <div className="desc mt-5">
                                <p className="text-[#858a8f] text-[1.2em]">
                                    Gia tăng nhận diện, Gắn kết khách hàng, Tăng
                                    nhanh doanh số
                                    <br className="max-md:hidden" /> và Thúc đẩy
                                    quá trình chuyển đổi số!
                                </p>
                                <div className="btns flex items-center mt-4 gap-5">
                                    <Link href="tel:+84969464154">
                                        <Button buttons={buttonsOutline}>
                                            Gọi ngay
                                            <span>
                                                <FaPhone />
                                            </span>
                                        </Button>
                                    </Link>
                                    <Button buttons={buttonFit}>
                                        Tư vấn miễn phí
                                        <span>
                                            <FaTelegram />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="banner-img flex-1 relative flex justify-center max-md:py-[1em]"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <img
                                src="./banner-ntechs.png"
                                alt="ntechs banner"
                                className="z-10 relative"
                            />
                            <span className="affles"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export { buttonFit, buttonsOutline };
export default BannerHome;
