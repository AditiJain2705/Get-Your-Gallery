
"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const page = () => {
    const [posts, setposts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const getmoreposts = async () => {
        try {
            const { data } = await axios.get(
                `https://picsum.photos/v2/list?page=2&limit=20&_start=${posts.length}`

            );
            data.length === 0 ? setHasMore(false) : "";
            setposts([...posts, ...data]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (posts.length === 0) getmoreposts();
    }, []);
    console.log(posts);
    return (
        <div className="mt-10">
           
            <div className="w-full " >
                <InfiniteScroll
                    dataLength={posts.length}
                    next={getmoreposts}
                    hasMore={hasMore}
                    loader={<h1>Loading...</h1>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    className="gridcard"
                >
                    {/*  className="w-full flex flex-wrap justify-center" */}
                    {posts.map((p, idx) => (
                        <div className=" card h-4/5   rounded-md  bg-neutral-200 overflow-hidden hover:scale-105 bg-neutral-400 shadow-lg shadow-slate-400/50" key={idx}>
                            
                            <img className="h-full w-full    " src={p.download_url} alt="" />
                           <div className="overlay">
                           <h1 className="text" > {p.author}</h1>
                           </div>
                           
                             
                           
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default page;