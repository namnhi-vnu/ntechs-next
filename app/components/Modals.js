"use client";
import { BiX } from "react-icons/bi";
import { buttonFit } from "./Banner";
import Button from "./button/Button";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const Modals = () => {
    const { handlerShowModal } = useContext(ModalContext);
    return (
        <div className="modals-main">
            <div className="modals-content min-w-[550px] max-w-[800px] shadow-md fixed z-30 bg-white  flex gap-3 py-8 px-4 rounded-lg ]">
                <button
                    onClick={() => handlerShowModal()}
                    className="absolute right-3 top-3 bg-slate-300 p-2 rounded-[50%] text-ntechs text-lg"
                >
                    <BiX />
                </button>
                <div className="w-[40%] flex items-center justify-center border-r-[1px] pr-1">
                    <img className="w-full " src="./avataForm.svg" alt="" />
                </div>
                <div className="form  ">
                    <img
                        src="./logo-ntechs.png"
                        alt=""
                        className="w-[150px] mx-auto"
                    />
                    <h2 className="text-center mt-3 text-[1.4em] font-medium">
                        Liên Hệ Với Chúng Tôi Ngay
                    </h2>
                    <p className="leading-8 text-lg">Bạn cần tư vấn</p>
                    <p className="leading-8 text-lg">
                        Bạn cần biết thêm thông tin các ứng dụng app mobile,
                        giải pháp cho doanh nghiệp
                    </p>
                    <p className="leading-8 text-lg">
                        Để lại số điện thoại của bạn - NTechs sẽ gọi lại ngay
                    </p>
                    <form action="" className="mt-4">
                        <div className="flex items-center gap-4">
                            <div className="grow">
                                <p>Họ tên</p>
                                <input
                                    type="text"
                                    className="border-spacing-1 border-[1px] w-full py-1 px-1 outline-none rounded-lg"
                                />
                            </div>
                            <div className="grow">
                                <p>Số điện thoại</p>
                                <input
                                    type="number"
                                    className="border-spacing-1 border-[1px] w-full py-1 px-1 outline-none rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <Button buttons={buttonFit}>Đăng ký</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modals;
