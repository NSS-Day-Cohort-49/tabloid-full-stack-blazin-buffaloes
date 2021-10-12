import React, { useEffect, useState } from "react";
import { getAllPost } from "../../modules/postManager";
import { Post } from "./Post";
import "./Post.css"


export const PostList = () => {
    
    const [ posts , setPosts ] = useState([])


    useEffect(() => {
        getAllPost().then(setPosts)
    }, []);
   
    return (

        <>
            <div>Post</div>
            {posts.map(p => 
                <Post key={p.id} post={p} />
            )}
        </>
    )
}