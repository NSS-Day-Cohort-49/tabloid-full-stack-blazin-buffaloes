import React, { useEffect, useState } from "react";
import { uid } from "../../modules/authManager";
import { getAllPost } from "../../modules/postManager";
import { Post } from "./Post";
import "./Post.css"


export const PostList = () => {
    
    const [ posts , setPosts ] = useState([])
    const currentUserId = sessionStorage.getItem("id")
    const authUser = Object.keys(window.localStorage)
  .filter(item => item.startsWith('firebase:authUser'))[0]

    useEffect(() => {
        getAllPost(uid).then(setPosts)
    }, []);
   
    return (

     

        <>
            <div>Post</div>
            {console.log(uid)}
            {posts.map(post => 
                <Post key={post.id} post={post} />
            )}
        </>
    )
}