"use client";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    return (
        <div>
            Blog
            <button onClick={() => router.push("/blog/post")}>Chuyển</button>
        </div>
    );
};

export default page;
