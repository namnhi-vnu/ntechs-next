"use client";
import { BiX } from "react-icons/bi";
import { buttonFit } from "./Banner";
import Button from "./button/Button";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const Modals = () => {
    const {
        handlerShowModal,
        handlergetFullName,
        handlergetPhone,
        getFullName,
        getPhoneNumber,
        handlerSendMessage,
        showAlert,
    } = useContext(ModalContext);
    const handlerSubmit = (event) => {
        event.preventDefault();
        handlerSendMessage();
    };
    return (
        <div className="modals-main ">
            <div className="modals-content max-md:block  max-md:min-w-[95%] min-w-[550px] max-w-[800px] shadow-md fixed z-30 bg-white  flex gap-3 py-8 px-4 rounded-lg ]">
                <button
                    onClick={() => handlerShowModal()}
                    className="absolute right-3 top-3 bg-slate-300 p-2 rounded-[50%] text-ntechs text-lg"
                >
                    <BiX />
                </button>
                <div className="w-[40%] max-md:hidden flex items-center justify-center border-r-[1px] pr-1">
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
                                    value={getFullName}
                                    onChange={(e) =>
                                        handlergetFullName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="grow">
                                <p>Số điện thoại</p>
                                <input
                                    type="text"
                                    className="border-spacing-1 border-[1px] w-full py-1 px-1 outline-none rounded-lg"
                                    value={getPhoneNumber}
                                    onChange={(e) =>
                                        handlergetPhone(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        {showAlert && (
                            <p className="text-red-500 text-xs mt-2">
                                Bạn chưa nhập đủ thông tin
                            </p>
                        )}
                        <div className="flex mt-5">
                            <button
                                onClick={handlerSubmit}
                                className="border-2 border-ntechs py-1 px-3 rounded-md flex items-center gap-2 text-white bg-ntechs transition-all  cursor-pointer hover:bg-white hover:text-ntechs"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modals;
