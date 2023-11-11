"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import BannerHome, { buttonsOutline, buttonFit } from "../Banner";
import { FaArrowRightLong, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import Contacts from "../Contacts";
import { useStore } from "../../store/hooks/useStore";

const HomePage = () => {
    const [state, dispatch] = useStore();

    return (
        <>
            <BannerHome />
            <main>
                <div className="business mt-7 ">
                    <div className="container mx-auto py-5 max-md:px-[1em]">
                        <div className="business-content">
                            <div
                                className="title text-center "
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p className="uppercase leading-6 text-base text-ntechs pb-2">
                                    Kinh doanh
                                </p>
                                <h2 className="text-4xl font-semibold">
                                    Các lĩnh vực chuyên dụng của App mobile
                                </h2>
                            </div>
                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 sm:px-3 gap-5">
                                <div
                                    className=""
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <p className="number font-mono">
                                        01
                                        <span className="rounded-full inline-block">
                                            .
                                        </span>
                                    </p>
                                    <h2 className="text-4xl font-bold text-[#333] leading-12 max-md:text-[1.755em]">
                                        Ứng dụng bán hàng thương mại
                                        <br className="max-md:hidden" /> điện tử
                                    </h2>
                                    <p
                                        className="text-[#858a8f] text-[1.2em] mt-2 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        Lập trình ứng dụng, app mobile bán hàng
                                        và thương mại điện tử là thế mạnh của
                                        NTechs. Các sản phẩm của chúng tôi có
                                        giao diện đẹp mắt, chuẩn UI/UX, tốc độ
                                        xử lý tối ưu và độ bảo mật tuyệt đối.
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
                                                    Mọi thao tác mua hàng đều
                                                    được thực hiện trên một
                                                    chiếc Smart phone, mang trải
                                                    nghiệm người dùng của khách
                                                    hàng nâng lên một tầm cao
                                                    mới.
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
                                                    App bán hàng, thương mại
                                                    điện tử sẽ đồng bộ dữ liệu
                                                    với website bán hàng nên có
                                                    thể dễ dàng quản lý và nhanh
                                                    chóng xử lý đơn hàng và các
                                                    yêu cầu khác của khách hàng.
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="application-app py-5 bg-[#e6e6e6] ">
                    <div className="container mx-auto py-5 max-md:px-[1em]">
                        <div className="grid xl:grid-cols-2 sm:grid-cols-1  aos-init aos-animate">
                            <div>
                                <div className="">
                                    <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <p className="number font-mono">
                                            02
                                            <span className="rounded-full inline-block">
                                                .
                                            </span>
                                        </p>
                                        <h2 className="text-4xl font-bold text-[#333] leading-12 max-md:text-[1.755em]">
                                            Ứng dụng đặt đồ ăn
                                        </h2>
                                    </div>
                                    <p
                                        className="text-[#858a8f] text-[1.2em] mt-2 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        Lập trình ứng dụng, app mobile đặt đồ ăn
                                        nhanh là thế mạnh của NTechs. Các sản
                                        phẩm của chúng tôi có giao diện đẹp mắt,
                                        chuẩn UI/UX, tốc độ xử lý tối ưu và độ
                                        bảo mật tuyệt đối.
                                    </p>
                                </div>
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
                                                Tiết kiệm
                                            </h3>
                                            <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                Mọi thao tác mua hàng đều được
                                                thực hiện trên một chiếc Smart
                                                phone, mang trải nghiệm người
                                                dùng của khách hàng nâng lên một
                                                tầm cao mới.
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
                                                Trực quan
                                            </h3>
                                            <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                Người bán đưa ra hình ảnh thực
                                                tế, trực quan về sản phẩm. Người
                                                mua dễ hình dung, dễ đánh giá và
                                                nhanh chóng đưa ra quyết định
                                                mua hàng.
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
                                                Tiện lợi
                                            </h3>
                                            <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                Các tính năng thanh toán trực
                                                tuyến, tự động thông báo, kết
                                                nối mạng xã hội được tích hợp
                                                sẵn giúp khách hàng có nhiều sự
                                                lựa chọn hơn, thoải mái hơn
                                                trong mua sắm.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-5 mt-5 aos-init aos-animate max-md:justify-center"
                                        data-aos="fade-right"
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
                            <div
                                className="img  max-md:py-[1em] flex items-center justify-center aos-init aos-animate "
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                {/* <img src="./application.png" alt="" /> */}
                                <Image
                                    width={614}
                                    height={657}
                                    src="/apply.png"
                                    className="w-4/5 max-md:w-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="web-app py-5 ">
                    <div className="container mx-auto py-5 max-md:px-[1em]">
                        <div className="grid grid-cols-2 gap-1 aos-init aos-animate max-md:flex max-md:flex-col-reverse ">
                            <div
                                className="img  flex items-center justify-center aos-init aos-animate flex-1"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <Image
                                    width={613}
                                    height={651}
                                    src="/erps.png"
                                    className="w-4/5 max-md:w-full"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="">
                                    <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <p className="number font-mono">
                                            03
                                            <span className="rounded-full inline-block">
                                                .
                                            </span>
                                        </p>
                                        <h2 className="text-4xl font-bold text-white leading-12 max-md:text-[1.755em]">
                                            Giải Pháp ERP
                                        </h2>
                                    </div>
                                    <p
                                        className="text-[#fff] text-[1.2em] mt-2 aos-init aos-animate max-md:text-justify"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        Giải Pháp ERP (Enterprise Resource
                                        Planning) của chúng tôi là một công cụ
                                        mạnh mẽ và toàn diện được thiết kế đặc
                                        biệt để đáp ứng nhu cầu của doanh nghiệp
                                        hoạt động trong lĩnh vực livestream bán
                                        hàng. Với sự kết hợp giữa sức mạnh của
                                        công nghệ và sự linh hoạt trong quản lý,
                                        giải pháp ERP của chúng tôi mang lại sự
                                        hiệu quả và tiết kiệm thời gian cho việc
                                        quản lý các khía cạnh quan trọng của
                                        doanh nghiệp
                                    </p>
                                </div>
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
                                            <h3 className="text-xl leading-7 font-semibold text-white">
                                                Quản lý Sản Phẩm
                                            </h3>
                                            <p className="text-[#fff] text-[1.2em] mt-2">
                                                Giải pháp ERP của chúng tôi cho
                                                phép bạn dễ dàng quản lý danh
                                                sách sản phẩm của bạn. Bạn có
                                                thể cập nhật thông tin sản phẩm,
                                                hình ảnh, giá cả và theo dõi
                                                tình trạng tồn kho một cách chi
                                                tiết.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-5 flex gap-3 aos-init aos-animate text-white"
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
                                            <h3 className="text-xl leading-7 font-semibold text-white">
                                                Quản lý Khách Hàng
                                            </h3>
                                            <p className="text-[#fff] text-[1.2em] mt-2">
                                                Dễ dàng quản lý thông tin khách
                                                hàng, lịch sử mua hàng và tương
                                                tác trực tiếp với họ. Tạo cơ hội
                                                tương tác cá nhân và tạo ấn
                                                tượng tích cực.
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
                                            <h3 className="text-xl leading-7 font-semibold text-white">
                                                Quản lý Tài Chính
                                            </h3>
                                            <p className="text-[#fff] text-[1.2em] mt-2">
                                                Theo dõi tài chính của bạn với
                                                sự hỗ trợ của các tính năng quản
                                                lý tài chính. Xem báo cáo tài
                                                chính, quản lý thu chi, và theo
                                                dõi hiệu suất tài chính của
                                                doanh nghiệp.
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
                                                src="/Icon.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="texts">
                                            <h3 className="text-xl leading-7 font-semibold text-white">
                                                Tích Hợp Hệ Thống
                                            </h3>
                                            <p className="text-[#fff] text-[1.2em] mt-2">
                                                Liên kết dữ liệu và thông tin từ
                                                các phần của doanh nghiệp, từ
                                                tồn kho đến tài chính và tiếp
                                                thị. Điều này giúp tối ưu hóa
                                                quy trình kinh doanh và giảm
                                                thiểu sự trùng lặp.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-5 mt-5 aos-init aos-animate max-md:justify-center"
                                        data-aos="fade-left"
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
                <div className="aplication-crm py-5 bg-[#e6e6e6]">
                    <div className="container mx-auto py-5  max-md:px-[1em]">
                        <div className="grid grid-cols-2 aos-init aos-animate max-md:grid-cols-1">
                            <div>
                                <div className="">
                                    <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <p className="number font-mono">
                                            04
                                            <span className="rounded-full inline-block">
                                                .
                                            </span>
                                        </p>
                                        <h2 className="text-4xl font-bold text-[#333] leading-12 max-md:text-[1.755em]">
                                            Ứng dụng quản lý doanh nghiệp
                                        </h2>
                                    </div>
                                    <p
                                        className="text-[#858a8f] text-[1.2em] mt-2 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        Đội ngũ có trình độ chuyên môn cao của
                                        NTechs luôn đưa ra các giải pháp tốt
                                        nhất để xử lý các nghiệp vụ đặc thù của
                                        mọi ngành nghề: Spa, Phòng khám, Giáo
                                        dục, Tài chính, Bảo hiểm …
                                    </p>
                                </div>
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
                                                Kinh nghiệm
                                            </h3>
                                            <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                NTechs đã có nhiều năm kinh
                                                nghiệm trong việc xây dựng app,
                                                ứng dụng hỗ trợ hoạt động kinh
                                                doanh của các doanh nghiệp trong
                                                mọi lĩnh vực, ngành nghề kinh
                                                doanh.
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
                                                Tốc độ
                                            </h3>
                                            <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                Triển khai nhanh chóng với quy
                                                trình dự án chuyên nghiệp sẽ
                                                giúp doanh nghiệp tận dụng được
                                                cơ hội kinh doanh nhanh chóng.
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
                                                Tiết kiệm
                                            </h3>
                                            <p className="text-[#858a8f] text-[1.2em] mt-2">
                                                Tối ưu chi phí đến 50% bởi
                                                NTechs có quy trình làm việc
                                                chuẩn, nhân lực chuyên môn sâu
                                                và định hướng triển khai rõ
                                                ràng.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-5 mt-5 aos-init aos-animate max-md:justify-center"
                                        data-aos="fade-right"
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
                            <div
                                className="img flex items-end aos-init aos-animate max-md:pt-[2em]"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <Image
                                    width={614}
                                    height={360}
                                    src="/banner-home-3-3_auto_x2-1536x905.png"
                                    className="lg:w-4/5 max-md:w-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="web-design__categorys py-[80px] max-md:py-[50px]">
                    <div className="container mx-auto max-md:px-[1em]">
                        <div className="title text-center">
                            <h2 className="text-ntechs text-4xl font-semibold my-[20px] max-md:text-[1.755em]">
                                NTechs thiết kế website đa ngành nghề
                            </h2>
                            <p className="text-[20px] text-ntechs font-light leading-[1.333em]">
                                NTechs cung cấp các giải pháp về thiết kế
                                website <br className="max-md:hidden" />
                                đáp ứng tất cả các ngành nghề & mọi lĩnh vực
                            </p>
                        </div>
                        <div className="list py-[2em]">
                            <div className="grid grid-cols-5 2xl:grid-cols-6 gap-5 max-md:grid-cols-2 max-md:gap-3">
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/page-pana.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Bán hàng
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/shop-rafiki.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Thời
                                                trang
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/booking-rafiki.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Khách
                                                sạn
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/company-amico.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Doanh
                                                nghiệp
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/seminar-bro.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Giáo dục
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/shelter-cuate.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Thú cưng
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/sale-pana.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Bất động
                                                sản
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/research-amico.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Y tế
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link href="/">
                                        <div className="img">
                                            <Image
                                                width={213}
                                                height={191}
                                                src="/globalization-cuate.svg"
                                                alt=""
                                                className="min-h-[191px] w-full max-h-[191px]"
                                            />
                                        </div>
                                        <div className="desc">
                                            <h2 className="text-[1.1em] text-center max-md:text-[1em]">
                                                NTechs Thiết kế website Du lịch
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-choose py-[2em]">
                    <div className="container mx-auto max-md:px-[1em]">
                        <div
                            className="text-center aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <p className="uppercase text-ntechs font-medium pb-[0.8em]">
                                Lý do lựa chọn
                            </p>
                            <h2 className="text-[2.25em] font-bold max-md:text-[1.755em]">
                                Lý do giúp NTechs có thể đồng hành với hơn 400
                                <br className="max-md:hidden" /> doanh nghiệp
                            </h2>
                        </div>
                        <div className="why-choose__content mt-10">
                            <div
                                className="why-choose__list aos-init aos-animate grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-3"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div
                                    className="why-choose__item p-5 flex gap-5 aos-init aos-animate max-md:p-2"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <div className="box-img">
                                        <Image
                                            width={55}
                                            height={55}
                                            className="min-w-[50px] inline-block"
                                            src="/Icon-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="box-text">
                                        <h2 className="text-[1.375em] font-semibold">
                                            Giải pháp thông minh
                                        </h2>
                                        <p>
                                            Tối ưu hóa mọi quy trình trong hoạt
                                            động kinh doanh và tăng trưởng doanh
                                            nghiệp.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="why-choose__item p-5 flex gap-5 aos-init aos-animate max-md:p-2"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <div className="box-img">
                                        <Image
                                            width={55}
                                            height={55}
                                            className="min-w-[50px] inline-block"
                                            src="/Icon-1-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="box-text">
                                        <h2 className="text-[1.375em] font-semibold">
                                            Tối ưu chi phí
                                        </h2>
                                        <p>
                                            Luôn có những định hướng triển khai
                                            rõ ràng giúp doanh nghiệp có mức chi
                                            phí đầu tư thấp nhất.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="why-choose__item p-5 flex gap-5 aos-init aos-animate max-md:p-2"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <div className="box-img">
                                        <Image
                                            width={55}
                                            height={55}
                                            className="min-w-[50px] inline-block"
                                            src="/Icon-2-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="box-text">
                                        <h2 className="text-[1.375em] font-semibold">
                                            Đồng hành công nghệ
                                        </h2>
                                        <p>
                                            Định hướng tương lai và đồng hành
                                            phát triển công nghệ với mọi doanh
                                            nghiệp.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="why-choose__item p-5 flex gap-5 aos-init aos-animate max-md:p-2"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <div className="box-img">
                                        <Image
                                            width={55}
                                            height={55}
                                            className="min-w-[50px] inline-block"
                                            src="/Icon-5.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="box-text">
                                        <h2 className="text-[1.375em] font-semibold">
                                            Đổi mới &amp; Sáng tạo
                                        </h2>
                                        <p>
                                            Cập nhật xu thế, tìm kiếm giải pháp
                                            mới nhằm mang đến giá trị lợi nhuận
                                            tốt nhất cho khách hàng.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="why-choose__item p-5 flex gap-5 aos-init aos-animate max-md:p-2"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="box-img">
                                        <Image
                                            width={55}
                                            height={55}
                                            className="min-w-[50px] inline-block"
                                            src="/Icon-4-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="box-text">
                                        <h2 className="text-[1.375em] font-semibold">
                                            Kinh nghiệm &amp; kỹ năng
                                        </h2>
                                        <p>
                                            Thực hiện được nhiều dự án xây dựng
                                            phần mềm, lập trình ứng dụng phù hợp
                                            với nghiệp vụ nhiều lĩnh vực.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="why-choose__item p-5 flex gap-5 aos-init aos-animate max-md:p-2"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <div className="box-img">
                                        <Image
                                            width={55}
                                            height={55}
                                            className="min-w-[50px] inline-block"
                                            src="/Icon-3-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="box-text">
                                        <h2 className="text-[1.375em] font-semibold">
                                            98.99% satisfaction
                                        </h2>
                                        <p>
                                            Chỉnh chu từ việc “lắng nghe” khách
                                            hàng, xây dựng và phát triển sản
                                            phẩm đến các dịch vụ hậu mãi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contacts />
                <div className="specific-number pb-10">
                    <div className="container mx-auto max-md:px-[1em]">
                        <div
                            className="specific-number__title aos-init aos-animate text-center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <h2 className="text-[2.25em] leading-[2em] pb-[0.5em] font-extrabold max-md:text-[1.755em]">
                                Những Thống Kê
                            </h2>
                        </div>
                        <div
                            className="specific-number__content aos-init aos-animate border-t-8 border-double border-ntechs rounded-md shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="specific-number__list grid grid-cols-4 max-md:grid-cols-2">
                                <div className="specific-number__item border-r-[1px] max-md:border-b-[1px]  p-[2.5em] max-md:px-[1em] text-center">
                                    <Image
                                        width={55}
                                        height={55}
                                        src="/medal-star.png"
                                        className="w-[45px] inline-block mb-[0.5em]"
                                        alt=""
                                    />
                                    <h2 className="text-[2.2em] leading-[2em] font-semibold">
                                        <span className="year-of-operation">
                                            3
                                        </span>
                                        +
                                    </h2>
                                    <p>Năm hoạt động</p>
                                </div>
                                <div className="specific-number__item border-r-[1px] max-md:border-b-[1px] p-[2.5em] max-md:px-[1em] text-center">
                                    <Image
                                        width={55}
                                        height={55}
                                        src="/Badge-3.png"
                                        className="w-[45px] inline-block mb-[0.5em]"
                                        alt=""
                                    />
                                    <h2 className="text-[2.2em] leading-[2em] font-semibold">
                                        122+
                                    </h2>
                                    <p>Doanh nghiệp đồng hành</p>
                                </div>
                                <div className="specific-number__item border-r-[1px] max-md:border-b-[1px] p-[2.5em] max-md:px-[1em] text-center">
                                    <Image
                                        width={55}
                                        height={55}
                                        src="/Icon_Transparency.png"
                                        className="w-[45px] inline-block mb-[0.5em]"
                                        alt=""
                                    />
                                    <h2 className="text-[2.2em] leading-[2em] font-semibold">
                                        580+
                                    </h2>
                                    <p>Dự án đã thực hiện</p>
                                </div>
                                <div className="specific-number__item border-r-[1px] max-md:border-b-[1px] p-[2.5em] max-md:px-[1em] text-center">
                                    <Image
                                        width={55}
                                        height={55}
                                        src="/Badge.png"
                                        className="w-[45px] inline-block mb-[0.5em]"
                                        alt=""
                                    />
                                    <h2 className="text-[2.2em] leading-[2em] font-semibold">
                                        897+
                                    </h2>
                                    <p>
                                        Đánh giá 5
                                        <i className="fa-solid fa-star"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
