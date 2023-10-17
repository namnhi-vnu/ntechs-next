"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaGlobe,
    FaHeadset,
    FaLocationDot,
    FaPhone,
    FaTelegram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";

const page = () => {
    return (
        <>
            <div className="page-contacts-main">
                <div className="banner-contact mt-3  relative">
                    <div className="container mx-auto">
                        <div className="relative z-30 min-h-[350px] flex items-center justify-center h-full">
                            <h2 className="text-[2.5em] text-center font-semibold text-ntechs max-md:text-[1.725em]">
                                Hãy để đội ngũ tư vấn của NTechs hỗ trợ bạn
                                <br /> dù ở bất kỳ nơi đâu
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mt-[2em]">
                    <div className="container mx-auto">
                        <div>
                            <h2 className="text-[2em] text-center font-semibold text-ntechs max-md:text-[1.725em]">
                                Tổng đài hỗ trợ trực tuyến
                            </h2>
                        </div>
                        <div className="list grid grid-cols-3 gap-10 w-[80%] mx-auto mt-8 max-md:grid-cols-1">
                            <div className="border-[1px] border-ntechs p-8 rounded-lg cursor-pointer text-center hover:bg-ntechs hover:text-white">
                                <div className="text-[2.5em] py-4 flex items-center justify-center text-hover hover:text-white">
                                    <span className="inline-block">
                                        <FaTelegram />
                                    </span>
                                </div>
                                <div>
                                    <p>Email:</p>
                                    <Link href="mailto:admin@ntechs.vn">
                                        admin@ntechs.vn
                                    </Link>
                                </div>
                            </div>
                            <div className="border-[1px] border-ntechs p-8 rounded-lg cursor-pointer text-center hover:bg-ntechs hover:text-white">
                                <div className="text-[2.5em] py-4 flex items-center justify-center text-hover hover:text-white">
                                    <span>
                                        <FaHeadset />
                                    </span>
                                </div>
                                <div>
                                    <p>Tổng đài NTechs:</p>
                                    <Link href="tel:0969464154">
                                        0969.464.154
                                    </Link>
                                </div>
                            </div>
                            <div className="border-[1px] border-ntechs p-8 rounded-lg cursor-pointer text-center hover:bg-ntechs hover:text-white">
                                <div className="text-[2.5em] py-4 flex items-center justify-center text-hover hover:text-white">
                                    <FaGlobe />
                                </div>
                                <div>
                                    <p>Website hỗ trợ:</p>
                                    <Link href="ntechs.vn">ntechs.vn</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[3em]">
                    <div className="container mx-auto max-md:px-4">
                        <div className="w-[80%] max-md:w-full mx-auto contacts-forms shadow-lg p-[1.5em] rounded-xl bg-ntechs">
                            <div className="flex gap-4 max-md:block">
                                <div className="flex-1">
                                    <h2 className="text-[1.5em] font-semibold text-white ">
                                        GỬI THÔNG TIN LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN VÀ{" "}
                                        <br className="max-md:hidden" />
                                        ĐƯA RA GIẢI PHÁP PHÙ HỢP
                                    </h2>
                                    <ul className="my-[3em] flex flex-col w-[60%] max-md:w-full text-white">
                                        <li className="my-4 p-4 inline-block max-md:my-2">
                                            <div className="flex items-center gap-4">
                                                <span className="text-hover text-lg">
                                                    <FaTelegram />
                                                </span>
                                                admin@ntechs.vn
                                            </div>
                                        </li>
                                        <li className="my-4 p-4 inline-block max-md:my-2 bg-black-rgba rounded-lg border-[1px] border-hover">
                                            <div className="flex items-center gap-4">
                                                <span className="text-hover text-lg">
                                                    <FaPhone />
                                                </span>
                                                0969.464.154
                                            </div>
                                        </li>
                                        <li className="my-4 p-4 max-md:my-2 ">
                                            <div className="flex items-center gap-4">
                                                <span className="text-hover text-lg">
                                                    <FaLocationDot />
                                                </span>
                                                Toà CT3 KĐT Bắc Linh Đàm, Đại
                                                Kim, Hoàng Mai, Hà Nội
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="flex items-center justify-start pl-4 gap-9 text-white max-md:mb-4 max-md:justify-center">
                                        <li>
                                            <Link
                                                href="/"
                                                className="text-[#1D9BF0] text-lg"
                                            >
                                                <FaTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center w-[31px] h-[31px] bg-hover rounded-[50%] text-white"
                                            >
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                                className="text-[#FF0000] text-lg"
                                            >
                                                <FaYoutube />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form flex-1 flex">
                                    <form
                                        action=""
                                        className="bg-white p-4 rounded-xl flex-1 flex flex-col justify-around"
                                    >
                                        <div className="pb-4">
                                            <p className="">Họ Tên</p>
                                            <input
                                                type="text"
                                                placeholder="Họ tên"
                                                className=" border border-slate-500 p-2 rounded-lg w-full outline-none  focus:outline-teal-800"
                                            />
                                        </div>
                                        <div className="pb-4">
                                            <p className="">Số điện thoại</p>
                                            <input
                                                type="text"
                                                placeholder="Số điện thoại"
                                                className=" border border-slate-500 p-2 rounded-lg w-full outline-none  focus:outline-teal-800"
                                            />
                                        </div>
                                        <div className="pb-4">
                                            <p className="">Email</p>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className=" border border-slate-500 p-2 rounded-lg w-full outline-none  focus:outline-teal-800"
                                            />
                                        </div>
                                        <div className="pb-4">
                                            <p className="">Chọn dịch vụ</p>
                                            <select
                                                name=""
                                                id=""
                                                className="border border-slate-500 p-2 rounded-lg w-full outline-none  focus:outline-teal-800"
                                            >
                                                <option value="Thiết kế Website">
                                                    Thiết kế Website
                                                </option>
                                                <option value="Thiết kế Mobile App">
                                                    Thiết kế Mobile App
                                                </option>
                                                <option value="Hệ thống ERP">
                                                    Hệ thống ERP
                                                </option>
                                                <option value="Hệ thống Affiliate">
                                                    Hệ thống Affiliate
                                                </option>
                                                <option value="Hệ thống CRM">
                                                    Hệ thống CRM
                                                </option>
                                            </select>
                                        </div>
                                        <div className="pb-4">
                                            <button className="p-3 bg-hover w-[200px] rounded-lg text-white text-lg hover:opacity-80">
                                                Gửi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
