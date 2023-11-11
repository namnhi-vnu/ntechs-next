"use client";
import Link from "next/link";
import { FaArrowRightLong, FaPhone } from "react-icons/fa6";
import Button from "./button/Button";
import { buttonFit, buttonsOutline } from "./Banner";
import { useStore } from "../store/hooks/useStore";
import Image from "next/image";

const Contacts = () => {
    const [state, dispatch] = useStore();
    return (
        <div className="contact-ntechs py-10 max-md:pb-[5em] max-xl:pb-[5em]">
            <div className="container mx-auto  max-md:px-[1em]">
                <div className="contact-ntechs__content">
                    <div className="contact-ntechs__boxs">
                        <div className="contact-ntechs-item flex items-center relative max-md:block">
                            <div
                                className="box-text aos-init aos-animate py-[2em] px-[2.5em] max-md:px-[1em] max-md:py-[1em]"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <h2 className="text-[2em] text-white font-semibold pt-10 max-md:text-[1.6em]">
                                    Bạn đang muốn triển khai một ứng dụng, app
                                    mobile? <br className="max-md:hidden" /> Gọi
                                    ngay cho NTechs
                                </h2>
                                <div className="btn pt-10 mt-10 flex gap-5 max-md:mt-0 max-md:pb-5">
                                    <Link href="tel:0969464154">
                                        <Button buttons={buttonFit}>
                                            <span>
                                                <FaPhone />
                                            </span>
                                            0969.464.154
                                        </Button>
                                    </Link>
                                    <Button
                                        buttons={buttonsOutline}
                                        dispatch={dispatch}
                                    >
                                        Đăng ký tư vấn <FaArrowRightLong />
                                    </Button>
                                </div>
                            </div>
                            <div
                                className="box-img aos-init aos-animate absolute right-[5%] 2xl:right-[10%] bottom-0 max-md:relative"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <Image
                                    width={430}
                                    height={539}
                                    src="/Frame-698.png"
                                    className="w-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
