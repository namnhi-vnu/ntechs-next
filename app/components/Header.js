"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    FaAngleDown,
    FaBarsStaggered,
    FaBlog,
    FaFacebook,
    FaPhone,
    FaRegEnvelope,
    FaYoutube,
} from "react-icons/fa6";
import { useStore } from "../store/hooks/useStore";
import { setShowModal } from "../store/reducer/action";
import ToastAlert from "./button/ToastAlert";
import Image from "next/image";

const Header = () => {
    const router = usePathname();
    const [state, dispatch] = useStore();
    const { isLoadSendModal } = state;
    return (
        <>
            <header className="header relative font-fira">
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
                            <ul className="flex items-center gap-8 max-md:pr-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-xl"
                                        title="Youtube"
                                        alt="Youtube"
                                    >
                                        <span>
                                            <FaYoutube />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.facebook.com/info.ntechs"
                                        target="_blank"
                                        className="text-white text-xl"
                                        title="Facebook"
                                        alt="Facebook"
                                    >
                                        <span>
                                            <FaFacebook />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        title="Blog"
                                        className="flex items-center gap-2 text-white font-semibold bg-[#EB681B] p-2 px-3"
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
                            <h1 title="Công Ty Cổ Phần Công Nghệ NTechs Việt Nam">
                                <Link href="/">
                                    <Image
                                        width={160}
                                        height={160}
                                        src="/logo-ntechs.png"
                                        alt="Công Ty Cổ Phần Công Nghệ NTechs Việt Nam"
                                        className="w-full"
                                    />
                                </Link>
                            </h1>
                        </div>
                        <div className="menus grow max-md:flex max-md:items-center max-md:justify-end ">
                            <span className="hidden max-md:block text-[1.7em]  mr-3 mt-3 text-ntechs">
                                <FaBarsStaggered />
                            </span>
                            <ul className="flex justify-end gap-x-10 items-center relative max-md:hidden">
                                <li
                                    className={` ${
                                        router === "#"
                                            ? "bg-hover  hover:text-white text-white  "
                                            : ""
                                    }text-[#084183] font-semibold hover:text-hover relative hover:bg-red-100 rounded-lg`}
                                    id="dropdownDelayButton"
                                    data-dropdown-toggle="dropdownDelay"
                                    data-dropdown-delay="200"
                                    data-dropdown-trigger="hover"
                                    type="button"
                                >
                                    <Link
                                        href="#"
                                        className={`${
                                            router === "#"
                                                ? "bg-hover  hover:text-white text-white  "
                                                : "hover:bg-red-100"
                                        } p-2 rounded-lg flex items-center gap-1 `}
                                    >
                                        Dịch Vụ
                                        <span className="mt-1">
                                            <FaAngleDown />
                                        </span>
                                    </Link>
                                    <div
                                        id="dropdownDelay"
                                        className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow shadow-gray-500 min-w-44 dark:bg-gray-700 absolute top-full w-max min-w-menu -left-8"
                                    >
                                        <ul
                                            className="py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-cols-2 p-2 gap-3"
                                            aria-labelledby="dropdownDelayButton"
                                        >
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/user-interface.png"
                                                        alt="Giải Pháp Mobile APP"
                                                    />
                                                    Giải Pháp Mobile APP
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/website.png"
                                                        alt="Thiết Kế Website"
                                                    />
                                                    Thiết Kế Website
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/affiliate-marketing.png"
                                                        alt="Giải Pháp Mobile APP"
                                                    />
                                                    Giải Pháp Mobile APP
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/crm.png"
                                                        alt="Giải Pháp CRM"
                                                    />
                                                    Giải Pháp CRM
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/erpsystem.png"
                                                        alt="Giải Pháp ERP"
                                                    />
                                                    Giải Pháp ERP
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/erpsystem.png"
                                                        alt="Giải Pháp Elearning"
                                                    />
                                                    Giải Pháp Elearning
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/smart-system.png"
                                                        alt="Hệ Thống Trường Học"
                                                    />
                                                    Hệ Thống Trường Học
                                                </Link>
                                            </li>
                                            <li className="my-1">
                                                <Link
                                                    href="#"
                                                    className=" px-4 py-2 rounded-md text-lg font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ntechs flex items-center gap-2"
                                                >
                                                    <Image
                                                        width={36}
                                                        height={36}
                                                        className="w-9"
                                                        src="/mobile-game.png"
                                                        alt="Website Game"
                                                    />
                                                    Website Game
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link
                                        href="/giai-phap"
                                        className={`${
                                            router === "/giai-phap"
                                                ? "bg-hover  hover:text-white text-white hover:bg-hover"
                                                : "hover:bg-red-100"
                                        } p-2 rounded-lg flex items-center gap-1 `}
                                    >
                                        Giải Pháp
                                    </Link>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link
                                        href="#"
                                        className={`${
                                            router === "#"
                                                ? "bg-hover  hover:text-white text-white hover:bg-hover "
                                                : "hover:bg-red-100"
                                        } p-2 rounded-lg flex items-center gap-1 `}
                                    >
                                        Ứng Dụng
                                    </Link>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link
                                        href="#"
                                        className={`${
                                            router === "#"
                                                ? "bg-hover  hover:text-white text-white hover:bg-hover "
                                                : "hover:bg-red-100"
                                        } p-2 rounded-lg flex items-center gap-1 `}
                                    >
                                        Báo giá
                                    </Link>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link
                                        href="/gioi-thieu"
                                        className={`${
                                            router === "/gioi-thieu"
                                                ? "bg-hover  hover:text-white text-white hover:bg-hover "
                                                : "hover:bg-red-100"
                                        } p-2 rounded-lg flex items-center gap-1 `}
                                    >
                                        Về NTechs
                                    </Link>
                                </li>
                                <li className="text-[#084183] font-semibold hover:text-hover py-2">
                                    <Link
                                        href="/lien-he"
                                        className={`${
                                            router === "/lien-he"
                                                ? "bg-hover  hover:text-white text-white hover:bg-hover "
                                                : "hover:bg-red-100"
                                        } p-2 rounded-lg flex items-center gap-1 `}
                                    >
                                        Liên Hệ
                                    </Link>
                                </li>
                                <li
                                    onClick={() => dispatch(setShowModal())}
                                    className="bg-[#084183] cursor-pointer text-white py-2 px-3 rounded-md "
                                >
                                    <Link href="#">Đăng Ký</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {isLoadSendModal && <ToastAlert />}
                {/* <ToastAlert /> */}
            </header>
        </>
    );
};

export default Header;
