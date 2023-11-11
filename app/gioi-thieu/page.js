"use client";
import Image from "next/image";
const About = () => {
    return (
        <>
            <title>Về NTechs - NTechs</title>
            <div className="abouts relative mt-3">
                <main className="">
                    <div className="banner-about text-center py-6 min-h-[350px] flex items-baseline justify-center">
                        <Image
                            src="/canvaleft.png"
                            alt=""
                            className="left"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="/canvaleft.png"
                            alt=""
                            width={100}
                            height={100}
                            className="right max-md:hidden"
                        />
                        <div className="z-20 relative">
                            <h3 className="text-[1.6em] text-hover font-semibold pt-10 max-md:text-[1.275em]">
                                Chào mừng bạn đến với NTechs
                            </h3>
                            <h2 className="text-[2.2em] text-ntechs font-semibold pt-2 max-md:text-[1.725em]">
                                Thiết kế và phát triển Web App, Mobile App đa
                                nền tảng
                            </h2>
                        </div>
                    </div>
                    <div className=" bg-white about-contents relative">
                        <div className="container  mx-auto py-6 ">
                            <div className="flex max-md:flex-col  relative bg-white max-w-[850px] mt-[-8em] gap-4 rounded-lg mx-auto p-[1em] shadow-md">
                                <Image
                                    src="/canvaleft.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="left w-[12%]"
                                />
                                <Image
                                    src="/canvaright.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="right"
                                />
                                <div className="img flex items-center justify-between flex-1">
                                    <Image
                                        src="/office.svg"
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="w-[35%] flex-1"
                                    />
                                </div>
                                <div className="flex-1 max-md:order-first">
                                    <h2 className="text-[1.5em] text-ntechs font-medium z-30 relative">
                                        Về chúng tôi
                                    </h2>
                                    <p className="text-[#333] z-20 relative">
                                        NTechs Là công ty công nghệ phát triển
                                        ứng dụng web mobile. Nắm bắt được sự
                                        thay đổi không ngừng của các xu hướng
                                        công nghệ và nhu cầu ngày càng phát
                                        triển của doanh nghiệp, NTechs giúp các
                                        doanh nghiệp, Startup thay đổi cách bán
                                        hàng để tăng doanh thu và năng lực cạnh
                                        tranh bằng cách cung cấp nền tảng công
                                        nghệ đột phá, có thể ứng dụng dễ dàng,
                                        nhanh chóng với chi phí hợp lý. Ntechs
                                        đã đồng hành cùng hơn 5000 Doanh nghiệp
                                        và chủ kinh doanh trên hành trình phát
                                        triển.
                                    </p>
                                    <p className="text-[#333] pt-2">
                                        NTechs luôn cố gắng nỗ lực với mục tiêu
                                        cao là mang lại sự hài lòng tới khách
                                        hàng thông qua những sản phẩm và giải
                                        pháp công nghệ tối ưu nhất. Đồng thời,
                                        chúng tôi không ngừng nghiên cứu và tiên
                                        phong trong các giải pháp công nghệ mới,
                                        góp phần khẳng định vị thế của mình.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="container mx-auto py-8 max-md:p-4">
                            <div>
                                <h2 className="text-[2em] text-ntechs text-center font-semibold">
                                    Mục tiêu sắp tới của NTechs
                                </h2>
                            </div>
                            <div className="mt-8">
                                <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
                                    <div className="p-4 rounded-lg hover:shadow-lg">
                                        <div className="pb-8 flex items-center justify-center">
                                            <Image
                                                src="/medal-star.png"
                                                alt=""
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="">
                                            <h2 className="text-[1.4em] font-semibold text-center pb-3">
                                                Trở thành đơn vị số 1
                                            </h2>
                                            <p className="text-lg text-center">
                                                Chuyên thiết kế phát triển ứng
                                                dụng đa nền tảng, giúp các doanh
                                                nghiệp phát triển nâng tầm
                                                thương hiệu
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shadow-lg p-4 rounded-lg border border-hover">
                                        <div className="pb-8 flex items-center justify-center">
                                            <Image
                                                src="/Icon-5.png"
                                                width={50}
                                                height={50}
                                                alt=""
                                            />
                                        </div>
                                        <div className="">
                                            <h2 className="text-[1.4em] font-semibold text-center pb-3">
                                                Hợp tác phát triển
                                            </h2>
                                            <p className="text-lg text-center">
                                                Cùng hơn 10.000 doanh nghiệp
                                                trong quá trình xây dựng và phát
                                                triển doanh nghiệp.
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" p-4 rounded-lg hover:shadow-lg">
                                        <div className="pb-8 flex items-center justify-center">
                                            <Image
                                                width={50}
                                                height={50}
                                                src="/Icon-2-1.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="">
                                            <h2 className="text-[1.4em] font-semibold text-center pb-3">
                                                Cung cấp mẫu thiết kế
                                            </h2>
                                            <p className="text-lg text-center">
                                                Tạo ra hơn 5000 mẫu thiết kế
                                                Mobile App ưu việt giúp gia tăng
                                                lợi nhuận, tối ưu chi phí và
                                                nâng cao giá trị doanh nghiệp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default About;
