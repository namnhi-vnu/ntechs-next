"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import BannerBlog from "./BannerBlog";

const page = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://ntechs-api.vercel.app/get-posts")
            .then((response) => {
                const post = response.data;
                console.log(post);
                setPosts(post);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            });
    }, []);
    console.log(posts);

    return (
        <div>
            <BannerBlog />
            <div className="title">
                <h2>Blogs</h2>
            </div>
            <div className="list">
                {posts.map((post) => (
                    <div className="item" key={post.id}>
                        <h2>{post.title.rendered}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
