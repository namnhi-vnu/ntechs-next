"use client";
import React, { useContext } from "react";
import Modals from "../components/Modals";
import { ModalContext } from "../contexts/ModalContext";

const About = () => {
    const { showModal } = useContext(ModalContext);

    return (
        <div className="abouts relative mt-3">
            <main className="">
                <div className="banner-about text-center py-6 min-h-[350px] flex items-baseline justify-center">
                    <img src="./canvaleft.png" alt="" className="left" />
                    <img src="./canvaleft.png" alt="" className="right" />
                    <div className="z-20 relative">
                        <h3 className="text-[1.6em] text-hover font-semibold pt-10">
                            Chào mừng bạn đến với NTechs
                        </h3>
                        <h2 className="text-[2.2em] text-ntechs font-semibold pt-2">
                            Thiết kế và phát triển Web App, Mobile App đa nền
                            tảng
                        </h2>
                    </div>
                </div>
                <div className=" bg-white about-contents relative">
                    <div className="container  mx-auto py-6 ">
                        <div className="flex relative bg-white max-w-[850px] mt-[-8em] gap-4 rounded-lg mx-auto p-[1em] shadow-md">
                            <img
                                src="./canvaleft.png"
                                alt=""
                                className="left w-[12%]"
                            />
                            <img
                                src="./canvaright.png"
                                alt=""
                                className="right"
                            />
                            <div className="img flex items-center justify-between flex-1">
                                <img
                                    src="./office.svg"
                                    alt=""
                                    className="w-[35%] flex-1"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-[1.5em] text-ntechs font-medium">
                                    Về chúng tôi
                                </h2>
                                <p className="text-[#333] z-20 relative">
                                    NTechs Là công ty công nghệ phát triển ứng
                                    dụng web mobile. Nắm bắt được sự thay đổi
                                    không ngừng của các xu hướng công nghệ và
                                    nhu cầu ngày càng phát triển của doanh
                                    nghiệp, NTechs giúp các doanh nghiệp,
                                    Startup thay đổi cách bán hàng để tăng doanh
                                    thu và năng lực cạnh tranh bằng cách cung
                                    cấp nền tảng công nghệ đột phá, có thể ứng
                                    dụng dễ dàng, nhanh chóng với chi phí hợp
                                    lý. Ntechs đã đồng hành cùng hơn 5000 Doanh
                                    nghiệp và chủ kinh doanh trên hành trình
                                    phát triển.
                                </p>
                                <p className="text-[#333] pt-2">
                                    NTechs luôn cố gắng nỗ lực với mục tiêu cao
                                    là mang lại sự hài lòng tới khách hàng thông
                                    qua những sản phẩm và giải pháp công nghệ
                                    tối ưu nhất. Đồng thời, chúng tôi không
                                    ngừng nghiên cứu và tiên phong trong các
                                    giải pháp công nghệ mới, góp phần khẳng định
                                    vị thế của mình.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container mx-auto py-8">
                        <div>
                            <h2 className="text-[2em] text-ntechs text-center font-semibold">
                                Mục tiêu sắp tới của NTechs
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
