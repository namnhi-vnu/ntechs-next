import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="min-h-[60vh] page-notfound flex items-center justify-center text-center">
            <div>
                <h2 className="text-center text-[10em]">404</h2>
                <p className="text-[2.5em] pb-5">Trang không được tìm thấy</p>
                <Link
                    href="/"
                    className="border-2 border-hover p-2 bg-hover text-white rounded-lg"
                >
                    Về Trang Chủ
                </Link>
            </div>
        </div>
    );
};

export default page;
