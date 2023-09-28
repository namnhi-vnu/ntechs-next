import Link from "next/link";
import React from "react";

const BannerBlog = () => {
    return (
        <>
            <div className="banner-blog pt-[60px] pb-[70px] h-[239px]">
                <div className="title text-center">
                    <h1 className="text-[2em] font-semibold text-ntechs">
                        <Link href="/blog">NTECHS BLOG</Link>
                    </h1>
                    <p>
                        Việc đọc rất quan trọng. Nếu bạn biết cách đọc, cả thế
                        giới sẽ mở ra cho bạn.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BannerBlog;
