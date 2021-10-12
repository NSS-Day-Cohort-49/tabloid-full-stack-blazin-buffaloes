import React, { useEffect, useState } from "react";
import { getAllPost } from "../../modules/postManager";
import { Post } from "./Post";
import "./Post.css"


export const PostList = () => {
    
    const [ posts , setPosts ] = useState([])
    const currentUserId = sessionStorage.getItem("id")


    useEffect(() => {
        getAllPost(parseInt(currentUserId)).then(setPosts)
    }, []);
   
    return (

        <>
            <div>Post</div>
            {posts.map(post => 
                <Post key={post.id} post={post} />
            )}
        </>
    )
}