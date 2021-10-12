import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const UserPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostByUserId().then(setPosts);
  }, []);

  return (
    <>
      <div>
        <h1>User Post</h1>
        {posts.map((post) => {
          <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};
