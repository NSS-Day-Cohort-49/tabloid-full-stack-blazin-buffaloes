import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { uid } from "../../modules/authManager";
import { getAllPost } from "../../modules/postManager";
import { Post } from "./Post";
import "./Post.css"


export const PostList = () => {
    
    const history = useHistory();
    const [ posts , setPosts ] = useState([])
    const addNewPost = () =>{
        history.push
    }

    useEffect(() => {
        getAllPost(uid).then(setPosts)
    }, []);
   
    return (

     

        <>
            <div>Post</div>
            <button onClick={addNewPost}>Add Post</button>
            {console.log(uid)}
            {posts.map(post => 
                <Post key={post.id} post={post} />
            )}
        </>
    )
}