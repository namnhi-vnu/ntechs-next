"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import BannerBlog from "./BannerBlog";

const page = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://ntechs-api.vercel.app/api/get-posts")
            .then((response) => {
                const post = response.data;

                setPosts(post);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            });
    }, []);
    // console.log(posts);

    return (
        <div className="blogs">
            <BannerBlog />
            <div className="title min-h-[20vh] flex items-center justify-center">
                <h2 className="text-center text-lg">Comming Soon</h2>
            </div>
            <div className="list">
                {/* {posts.map((post) => (
                    <div className="item" key={post.id}>
                        <h2>{post.title.rendered}</h2>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default page;
