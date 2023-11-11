"use client";
import Link from "next/link";
import {
    FaFacebook,
    FaLocationDot,
    FaPhone,
    FaRegEnvelope,
    FaYoutube,
} from "react-icons/fa6";
import Modals from "../Modals";
import { useStore } from "../../store/hooks/useStore";
import Image from "next/image";

const Footer = () => {
    const [state] = useStore();
    const year = new Date().getFullYear();
    const { showModal } = state;

    return (
        <>
            <footer className="bg-[#0C0129] ">
                <Image
                    width={160}
                    height={160}
                    src="/canvaleft.png"
                    alt=""
                    className="canvas-right "
                />
                <Image
                    width={160}
                    height={160}
                    src="/canvaright.png"
                    alt=""
                    className="canvas-left"
                />
                <div className="container mx-auto pt-[3em] pb-[4em] max-md:px-[1em]">
                    <div className="contents">
                        <div
                            className="aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <div className="logo w-[160px]">
                                <Image
                                    width={160}
                                    height={78}
                                    src="/logo-ntechs.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 max-md:grid-cols-1 ">
                            <div className="address col-start-1 col-end-3 max-md:col-start-1 max-md:col-end-2">
                                <div
                                    className="lg:w-3/4 2xl:w-3/5 mb-3 aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <h1 className="text-white text-[1.5em] leading-[1.6em] font-semibold text-center">
                                        Công Ty Cổ Phần Công Nghệ
                                        <br className="max-md:hidden" /> NTechs
                                        Việt Nam
                                    </h1>
                                </div>
                                <ul
                                    className="max-md:mt-5 max-md:flex max-md:justify-center max-md:flex-col max-md:items-center aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            className=" flex items-start text-white gap-3 leading-8 max-md:text-center"
                                        >
                                            <span className="mt-2 inline-block">
                                                <FaLocationDot />
                                            </span>
                                            Toà CT3 KĐT Bắc Linh Đàm, Đại Kim,
                                            Hoàng Mai,
                                            <br className="max-md:hidden" /> Hà
                                            Nội
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="mailto:admin@ntechs.vn"
                                            className=" flex items-center text-white gap-3 leading-8"
                                        >
                                            <span>
                                                <FaRegEnvelope />
                                            </span>
                                            admin@ntechs.vn
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="tel:0969464154"
                                            className=" flex items-center text-white gap-3 leading-8"
                                        >
                                            <span>
                                                <FaPhone />
                                            </span>
                                            0969.464.154
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="service text-white max-md:text-center max-md:mt-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <h2 className="text-[1.4em] font-medium leading-7 pb-4">
                                    Dịch vụ cung cấp
                                </h2>
                                <ul>
                                    <li className="leading-8">
                                        <Link
                                            href="#"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Thiết kế Website
                                        </Link>
                                    </li>
                                    <li className="leading-8">
                                        <Link
                                            href="#"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Affiliate Marketing
                                        </Link>
                                    </li>
                                    <li className="leading-8">
                                        <Link
                                            href="#"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Giải pháp Mobile App
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="flex items-center max-md:justify-center gap-8 mt-6">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-white text-xl hover:text-[#FF0000]"
                                        >
                                            <span>
                                                <FaYoutube />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-white text-xl hover:text-[#0866FF]"
                                        >
                                            <span>
                                                <FaFacebook />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="service text-white max-md:text-center max-md:mt-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <h2 className="text-[1.4em] font-medium leading-7 pb-4">
                                    Thông tin cần biết
                                </h2>
                                <ul>
                                    <li className="leading-8">
                                        <Link
                                            href="/giai-phap"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Giải pháp
                                        </Link>
                                    </li>
                                    <li className="leading-8">
                                        <Link
                                            href="/lien-he"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Liên hệ
                                        </Link>
                                    </li>
                                    <li className="leading-8">
                                        <Link
                                            href="#"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Báo giá
                                        </Link>
                                    </li>
                                    <li className="leading-8">
                                        <Link
                                            href="/gioi-thieu"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Về NTechs
                                        </Link>
                                    </li>
                                    <li className="leading-8">
                                        <Link
                                            href="#"
                                            className="hover:text-hover font-extralight hover:underline"
                                        >
                                            Chính sách bảo mật
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coppyright">
                    <div className="container mx-auto">
                        <p className="text-[#bababa] text-sm pb-[0.5em] font-light max-md:text-center">
                            Copyright {year} © NTechs. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
            {showModal && <Modals />}
        </>
    );
};

export default Footer;
