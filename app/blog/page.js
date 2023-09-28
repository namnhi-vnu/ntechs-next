"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import BannerBlog from "./BannerBlog";

const username = "nt.vanha@1997";
const password = "Ntechs@2022!";
const authString = `${username}:${password}`;
const apiUrl = "https://ntechs.vn/wp-json/wp/v2/posts";
const base64Credentials = Buffer.from(`${username}:${password}`).toString(
    "base64"
);

const page = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Basic ${base64Credentials}`,
            },
        });

        axiosInstance
            .get("/")
            .then((response) => {
                const post = response.data;
                console.log("Danh sách bài viết:");
                console.log(post);

                setPosts(post);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
                res.status(500).json({ error: "Lỗi khi lấy dữ liệu từ API." });
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
