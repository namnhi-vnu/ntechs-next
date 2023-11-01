"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import BannerBlog from "./BannerBlog";
import LoadingBlog from "./LoadingBlog";

const Page = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     setIsLoading(true);
    //     axios
    //         .get("https://ntechs-api.vercel.app/api/get-posts")
    //         .then((response) => {
    //             const post = response.data;
    //             setPosts(post);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error("Lỗi khi gọi API:", error);
    //         });
    // }, []);

    const dateTimeString = (date) => {
        const dates = new Date(date);
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const formattedDate = dates.toLocaleDateString("vi-VN", options);
        return formattedDate;
    };

    return (
        <div className="blogs">
            <title>Blog - NTechs</title>
            <div className="container mx-auto max-md:px-2">
                <BannerBlog />
                <h2 className="text-center py-8 text-2xl">Coming Soon</h2>
                <div className="list grid grid-cols-4 gap-8 py-8 max-md:grid-cols-2 max-md:gap-4">
                    {!isLoading &&
                        posts.map((post) => (
                            <div
                                className="item rounded-xl shadow-xl overflow-hidden"
                                key={post.id}
                            >
                                <h2 className="text-lg hover:text-hover font-semibold ">
                                    <Link href={`/${post.slug}`}>
                                        <img
                                            className="min-h-[200px] max-h-[200px] w-full"
                                            src={
                                                post.yoast_head_json.og_image[0]
                                                    .url
                                            }
                                            alt=""
                                        />
                                        <span className="p-3 inline-block min-h-[80px]">
                                            {post.title.rendered}
                                        </span>
                                    </Link>
                                </h2>
                                <div className="flex items-center justify-between px-3 text-sm">
                                    <p className="bg-bg-rgba p-1 rounded-xl text-hover text-xs">
                                        {post.yoast_head_json.author}
                                    </p>
                                    <p>{dateTimeString(post.date)}</p>
                                </div>
                                <p className="p-3">
                                    {post.yoast_head_json.description}
                                </p>
                            </div>
                        ))}
                </div>
                {isLoading && <LoadingBlog />}
            </div>
        </div>
    );
};

export default Page;
