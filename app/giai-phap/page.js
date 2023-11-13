"use client";
import {
    FaArrowRightLong,
    FaPhone,
    FaRegEnvelope,
    FaTelegram,
} from "react-icons/fa6";
import TypingEffect from "../components/TypingEffect";
import Button from "../components/button/Button";
import { buttonsOutline, buttonFit } from "../components/Banner";
import Contacts from "../components/Contacts";
import Link from "next/link";
import { useStore } from "../store/hooks/useStore";
import Image from "next/image";

const typings = [
    "Giải Pháp Thông Minh Của NTechs",
    2000,
    "Nâng Tầm Doanh Nghiệp Của Bạn",
    2000,
];
const page = () => {
    const [state, dispatch] = useStore();

    return (
        <>
            <title>Giải Pháp - NTechs</title>
            <div className="solution">
                <div className="banners min-h-[300px]">
                    <div className="container mx-auto relative z-10 py-8 max-md:px-[0.5em]">
                        <h2 className="max-md:min-h-[72px]">
                            <TypingEffect
                                typing={typings}
                                style="text-center text-[2.5em] max-md:text-[1.5em] font-bold text-ntechs"
                            />
                        </h2>
                        <div className="w-3/6 max-md:w-full mx-auto text-center">
                            <p className="text-[1.2em] text-[#858a8f] leading-[28px] pt-2 max-md:text-[1.15em]">
                                NTechs không đơn thuần làm website/ App theo yêu
                                cầu của doanh nghiệp.
                            </p>
                            <p className="text-[1.2em] text-[#858a8f] leading-[28px] pt-2 max-md:text-[1.15em]">
                                Ntechs luôn mang đến cho doanh nghiệp những giải
                                pháp công nghệ tốt nhất cho hoạt động kinh
                                doanh, nâng cao hiệu quả bán hàng và thúc đẩy
                                chuyển đổi số doanh nghiệp
                            </p>
                            <div className="btn flex justify-center gap-3 pt-5 ">
                                <Link href="tel:+84969464154">
                                    <Button buttons={buttonsOutline}>
                                        Gọi ngay
                                        <span>
                                            <FaPhone />
                                        </span>
                                    </Button>
                                </Link>
                                <Button buttons={buttonFit} dispatch={dispatch}>
                                    Tư vấn miễn phí <FaTelegram />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service bg-white  py-10 relative">
                    <Image
                        width={160}
                        height={160}
                        src="/canvaleft.png"
                        alt=""
                        className="left"
                    />
                    <Image
                        width={160}
                        height={160}
                        src="/canvaright.png"
                        alt=""
                        className="right"
                    />

                    <div className="container mx-auto max-md:px-[1em]">
                        <div className="text-center ">
                            <h2 className="text-[2.25em] font-semibold text-ntechs max-md:text-[1.725em]">
                                Dịch vụ mà NTechs cung cấp cho bạn
                            </h2>
                            <p className="py-3 leading-7 max-md:text-[0.95em]">
                                CÁC GIẢI PHÁP CỦA NTECHS: WEBSITE, MOBILE APP,
                                ERP, AFFILIATE MARKETING, CRM <br />
                                NÂNG CẤP HỖ TRỢ TỐI ĐA CHO PHÁT TRIỂN KINH DOANH
                                CỦA DOANH NGHIỆP
                            </p>
                        </div>
                        <div className="service-nt">
                            <div className="grid 2xl:grid-cols-2 my-3 xl:grid-cols-2 sm:grid-cols-1 sm:px-3 gap-5">
                                <div
                                    className="aos-init aos-animate"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <p className="number font-mono">
                                        01
                                        <span className="rounded-full inline-block">
                                            .
                                        </span>
                                    </p>
                                    <h2 className="text-4xl font-bold text-[#333] leading-12 max-md:text-[1.725em]">
                                        Thiết kế & lập trình Website
                                    </h2>
                                    <p
                                        className="text-[#858a8f] text-[1.2em] mt-2 aos-init aos-animate"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        Thiết kế & lập trình Website là lĩnh vực
                                        rất mạnh của NTechs. Các sản phẩm của
                                        chúng tôi có giao diện đẹp mắt, chuẩn
                                        UI/UX, tốc độ xử lý tối ưu, hứa hẹn trở
                                        thành trợ thủ đắc lực trong chuyển đổi
                                        số doanh nghiệp.
                                    </p>
                                    <div>
                                        <div
                                            className="mt-5 flex gap-3 aos-init aos-animate"
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                        >
                                            <div className="img max-md:w-[90px] max-md:mt-1">
                                                <Image
                                                    width={55}
                                                    height={55}
                                                    src="/Icon.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="texts">
                                                <h3 className="text-xl leading-7 font-semibold">
                                                    Tiện lợi
                                                </h3>
                                                <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                    Sở hữu một Website chuyên
                                                    nghiệp đồng nghĩa với việc
                                                    bạn có một kênh Marketing
                                                    trực tiếp mang lại hiệu quả
                                                    cao, giá trị lâu dài mà
                                                    không mất quá nhiều chi phí.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-5 flex gap-3 aos-init aos-animate"
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                        >
                                            <div className="img max-md:w-[90px] max-md:mt-1">
                                                <Image
                                                    width={55}
                                                    height={55}
                                                    src="/Icon-1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="texts">
                                                <h3 className="text-xl leading-7 font-semibold">
                                                    Nhanh chóng
                                                </h3>
                                                <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                    Gia tăng cơ hội up sale,
                                                    thương mại điện tử sẽ đồng
                                                    bộ dữ liệu với website bán
                                                    hàng nên có thể dễ dàng quản
                                                    lý và nhanh chóng xử lý đơn
                                                    hàng và các yêu cầu khác của
                                                    khách hàng.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-5 flex gap-3 aos-init aos-animate"
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                        >
                                            <div className="img max-md:w-[90px] max-md:mt-1">
                                                <Image
                                                    width={55}
                                                    height={55}
                                                    src="/Icon_Total-Control.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="texts">
                                                <h3 className="text-xl leading-7 font-semibold">
                                                    Hiện đại
                                                </h3>
                                                <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                    Các tính năng thanh toán
                                                    trực tuyến, tự động thông
                                                    báo, kết nối mạng xã hội
                                                    được tích hợp sẵn giúp khách
                                                    hàng có nhiều sự lựa chọn
                                                    hơn, thoải mái hơn trong mua
                                                    sắm.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-5 mt-5 aos-init aos-animate max-md:justify-center"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <Button
                                                buttons={buttonFit}
                                                dispatch={dispatch}
                                            >
                                                Đăng ký tư vấn <FaRegEnvelope />
                                            </Button>
                                            <Button
                                                buttons={buttonsOutline}
                                                dispatch={dispatch}
                                            >
                                                Chi tiêt <FaArrowRightLong />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        width={746}
                                        height={429}
                                        src="/web.svg"
                                        alt=""
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        className="w-[100%] aos-init aos-animate rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid 2xl:grid-cols-2 my-3 xl:grid-cols-2 sm:grid-cols-1 sm:px-3 gap-5 max-md:flex max-md:flex-col-reverse aos-init aos-animate">
                                <div className="flex items-center justify-center">
                                    <Image
                                        width={336}
                                        height={674}
                                        src="/app-03.png"
                                        alt=""
                                        data-aos="zoom-in-up"
                                        data-aos-duration="1000"
                                        className="w-[45%] aos-init aos-animate"
                                    />
                                </div>
                                <div
                                    className="aos-init aos-animate"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <p className="number font-mono">
                                        02
                                        <span className="rounded-full inline-block">
                                            .
                                        </span>
                                    </p>
                                    <h2 className="text-4xl font-bold text-[#333] leading-12 max-md:text-[1.755em]">
                                        Thiết kế & lập trình App Mobile
                                    </h2>
                                    <p
                                        className="text-[#858a8f] text-[1.2em] mt-2 aos-init aos-animate"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        Thiết kế & lập trình App Mobile là lĩnh
                                        vực rất mạnh của NTechs. Các sản phẩm
                                        của chúng tôi có giao diện đẹp mắt,
                                        chuẩn UI/UX, tốc độ xử lý tối ưu, hứa
                                        hẹn trở thành trợ thủ đắc lực trong
                                        chuyển đổi số doanh nghiệp.
                                    </p>
                                    <div>
                                        <div
                                            className="mt-5 flex gap-3 aos-init aos-animate"
                                            data-aos="fade-left"
                                            data-aos-duration="1000"
                                        >
                                            <div className="img max-md:w-[90px] max-md:mt-1">
                                                <Image
                                                    width={55}
                                                    height={55}
                                                    src="/Icon.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="texts">
                                                <h3 className="text-xl leading-7 font-semibold">
                                                    Tiện lợi
                                                </h3>
                                                <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                    Sở hữu một App Mobile chuyên
                                                    nghiệp đồng nghĩa với việc
                                                    bạn có một kênh Marketing
                                                    trực tiếp mang lại hiệu quả
                                                    cao, giá trị lâu dài mà
                                                    không mất quá nhiều chi phí.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-5 flex gap-3 aos-init aos-animate"
                                            data-aos="fade-left"
                                            data-aos-duration="1000"
                                        >
                                            <div className="img max-md:w-[90px] max-md:mt-1">
                                                <Image
                                                    width={55}
                                                    height={55}
                                                    src="/Icon-1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="texts">
                                                <h3 className="text-xl leading-7 font-semibold">
                                                    Nhanh chóng
                                                </h3>
                                                <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                    Gia tăng cơ hội up sale,
                                                    thương mại điện tử sẽ đồng
                                                    bộ dữ liệu với App Mobile
                                                    bán hàng nên có thể dễ dàng
                                                    quản lý và nhanh chóng xử lý
                                                    đơn hàng và các yêu cầu khác
                                                    của khách hàng.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-5 flex gap-3 aos-init aos-animate"
                                            data-aos="fade-left"
                                            data-aos-duration="1000"
                                        >
                                            <div className="img max-md:w-[90px] max-md:mt-1">
                                                <Image
                                                    width={55}
                                                    height={55}
                                                    src="/Icon_Total-Control.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="texts">
                                                <h3 className="text-xl leading-7 font-semibold">
                                                    Hiện đại
                                                </h3>
                                                <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                    Các tính năng thanh toán
                                                    trực tuyến, tự động thông
                                                    báo, kết nối mạng xã hội
                                                    được tích hợp sẵn giúp khách
                                                    hàng có nhiều sự lựa chọn
                                                    hơn, thoải mái hơn trong mua
                                                    sắm.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-5 mt-5 aos-init aos-animate max-md:justify-center"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <Button
                                                buttons={buttonFit}
                                                dispatch={dispatch}
                                            >
                                                Đăng ký tư vấn <FaRegEnvelope />
                                            </Button>
                                            <Button
                                                buttons={buttonsOutline}
                                                dispatch={dispatch}
                                            >
                                                Chi tiêt <FaArrowRightLong />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="specific-number py-10">
                    <Contacts />
                </div>
            </div>
        </>
    );
};

export default page;
