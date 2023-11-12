"use client";
import axios from "axios";
import { BiX } from "react-icons/bi";
import { useStore } from "../store/hooks/useStore";
import {
    setAlertModal,
    setCloseModal,
    setInputModal,
    setSendModal,
} from "../store/reducer/action";

const Modals = () => {
    const [state, dispatch] = useStore();
    const { getInputModal, showAlertModal } = state;
    const onChangeInput = (event) => {
        dispatch(
            setInputModal({
                ...getInputModal,
                [event.target.name]: event.target.value,
            })
        );
    };

    const handlerSendMessage = async (event) => {
        event.preventDefault();
        try {
            if (
                state.getInputModal.fullname !== "" &&
                state.getInputModal.phone !== ""
            ) {
                const res = await axios.post(
                    "https://ntechs-api.vercel.app/api/send-mail",
                    {
                        Fullname: state.getInputModal.fullname,
                        phoneNumber: state.getInputModal.phone,
                        emailAddress: "nomail@gmail.com",
                    }
                );
                dispatch(setSendModal());
            } else if (
                state.getInputModal.fullname === "" &&
                state.getInputModal.phone === ""
            ) {
                dispatch(setAlertModal());
            }
        } catch (error) {}
    };

    return (
        <div className="modals-main ">
            <div className="modals-content max-md:block  max-md:min-w-[95%] min-w-[550px] max-w-[800px] shadow-md fixed z-30 bg-white  flex gap-3 py-8 px-4 rounded-lg ]">
                <button
                    onClick={() => dispatch(setCloseModal())}
                    className="absolute right-3 top-3 bg-slate-300 p-2 rounded-[50%] text-ntechs text-lg"
                >
                    <BiX />
                </button>
                <div className="w-[40%] max-md:hidden flex items-center justify-center border-r-[1px] pr-1">
                    <img className="w-full " src="./avataForm.svg" alt="" />
                </div>
                <div className="forms  ">
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
                    <form className="mt-4" method="POST">
                        <div className="flex items-center gap-4">
                            <div className="grow">
                                <p>Họ tên</p>
                                <input
                                    name="fullname"
                                    type="text"
                                    className="border-spacing-1 border-[1px] w-full py-1 px-1 outline-none rounded-lg"
                                    value={getInputModal.fullname}
                                    onChange={(event) => onChangeInput(event)}
                                />
                            </div>
                            <div className="grow">
                                <p>Số điện thoại</p>
                                <input
                                    name="phone"
                                    type="text"
                                    className="border-spacing-1 border-[1px] w-full py-1 px-1 outline-none rounded-lg"
                                    value={getInputModal.phone}
                                    onChange={(event) => onChangeInput(event)}
                                />
                            </div>
                        </div>
                        {showAlertModal && (
                            <p className="text-red-500 text-xs mt-2">
                                Bạn chưa nhập đủ thông tin
                            </p>
                        )}
                        <div className="flex mt-5">
                            <button
                                onClick={(event) => handlerSendMessage(event)}
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
