"use client";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";

import {
    FaAngleDown,
    FaBarsStaggered,
    FaBlog,
    FaFacebook,
    FaPhone,
    FaRegEnvelope,
    FaYoutube,
} from "react-icons/fa6";
const Header = () => {
    return (
        <>
            <header className="header font-fira">
                <div className="top-bar bg-[#084183]">
                    <div className="container mx-auto">
                        <div className="topbar-main flex justify-between max-md:justify-end">
                            <ul className="max-md:hidden flex items-center gap-5  ">
                                <li>
                                    <Link
                                        href="mailto:admin@ntechs.vn"
                                        className="text-white text-sm font-normal flex items-center gap-2"
                                    >
                                        <span>
                                            <FaRegEnvelope />
                                        </span>
                                        Email: admin@ntechs.vn
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="tel:0969464154"
                                        className="text-white text-sm font-normal flex items-center gap-2"
                                    >
                                        <span>
                                            <FaPhone />
                                        </span>
                                        Phone: 0969.464.154
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex items-center gap-8">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-xl"
                                    >
                                        <span>
                                            <FaYoutube />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-xl"
                                    >
                                        <span>
                                            <FaFacebook />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2 text-white bg-[#EB681B] p-2 "
                                    >
                                        <span>
                                            <FaBlog />
                                        </span>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="menu-main">
                    <div className="container mx-auto py-2 flex items-center max-md:px-[1em]">
                        <div className="ntechs-logo w-[150px]">
                            <Link href="/">
                                <img
                                    src="./logo-ntechs.png"
                                    alt=""
                                    className="w-full"
                                />
                            </Link>
                        </div>
                        <div className="menus grow max-md:flex max-md:items-center max-md:justify-end ">
                            <span className="hidden max-md:block text-[1.7em] inline-block mr-3 mt-3 text-ntechs">
                                <FaBarsStaggered />
                            </span>
                            <ul className="flex justify-end gap-x-10 items-center relative max-md:hidden">
                                <li
                                    className="text-[#084183] font-semibold hover:text-hover relative py-2 flex items-center gap-1 cursor-pointer"
                                    id="dropdownDelayButton"
                                    data-dropdown-toggle="dropdownDelay"
                                    data-dropdown-delay="200"
                                    data-dropdown-trigger="hover"
                                    type="button"
                                >
                                    Dịch Vụ
                                    <span className="mt-1">
                                        <FaAngleDown />
                                    </span>
                                    <div
                                        id="dropdownDelay"
                                        className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow shadow-gray-500 w-44 dark:bg-gray-700 absolute top-full w-max min-w-menu -left-8"
                                    >
                                        <ul
                                            className="py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-cols-2 p-2 gap-3"
                                            aria-labelledby="dropdownDelayButton"
                                        >
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./user-interface.png"
                                                        alt=""
                                                    />
                                                    Giải Pháp Mobile APP
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./website.png"
                                                        alt=""
                                                    />
                                                    Thiết Kế Website
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./affiliate-marketing.png"
                                                        alt=""
                                                    />
                                                    Giải Pháp Mobile APP
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./crm.png"
                                                        alt=""
                                                    />
                                                    Giải Pháp CRM
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./erpsystem.png"
                                                        alt=""
                                                    />
                                                    Giải Pháp ERP
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./erpsystem.png"
                                                        alt=""
                                                    />
                                                    Giải Pháp Elearning
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./smart-system.png"
                                                        alt=""
                                                    />
                                                    Hệ Thống Trường Học
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <img
                                                        className="w-9"
                                                        src="./mobile-game.png"
                                                        alt=""
                                                    />
                                                    Website Game
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link href="/giai-phap">Giải Pháp</Link>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    Ứng Dụng
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    Báo giá
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link href="/gioi-thieu">Về NTechs</Link>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    Liên Hệ
                                </li>
                                <li className="bg-[#084183] text-white py-2 px-3 rounded-md py-2">
                                    <Link href="#">Đăng Ký</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
