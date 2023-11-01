"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = ({ params }) => {
    // Lấy slug từ params
    const { slug } = params;
    // Khai báo state để lưu dữ liệu bài viết chi tiết
    const [post, setPost] = useState(null);

    // useEffect(() => {
    //     // Gọi API để lấy chi tiết bài viết dựa trên slug
    //     axios
    //         .get(`https://ntechs-api.vercel.app/api/post-detail/${slug}`)
    //         .then((response) => {
    //             const postData = response.data;
    //             setPost(postData);
    //         })
    //         .catch((error) => {
    //             console.error("Lỗi khi gọi API:", error);
    //         });
    // }, [slug]);

    const dateTimeString = (date) => {
        const dates = new Date(date);
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const formattedDate = dates.toLocaleDateString("vi-VN", options);
        return formattedDate;
    };
    return (
        <>
            <div className="post-detail">
                <div className="container mx-auto w-[60%] py-8 max-md:w-full">
                    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1">
                        <div className="col-span-3 shadow-xl p-4 rounded-xl">
                            {post ? (
                                <div>
                                    <title>
                                        {post.title.rendered + " NTechs"}
                                    </title>
                                    <div className="border-b-[1px] border-slate-400 py-2">
                                        <h1 className="text-[2em] max-md:text-[1.5em] font-semibold">
                                            {post.title.rendered}
                                        </h1>
                                        <div className="flex items-center justify-between text-sm">
                                            <p>{post.yoast_head_json.author}</p>
                                            <p>{dateTimeString(post.date)}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="text-justify py-4"
                                        dangerouslySetInnerHTML={{
                                            __html: post.content.rendered,
                                        }}
                                    />
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div>
                            {" "}
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
