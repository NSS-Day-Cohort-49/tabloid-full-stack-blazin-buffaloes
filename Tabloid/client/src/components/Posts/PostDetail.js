import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardTitle } from "reactstrap";
import { getPostById } from "../../modules/postManager";

export const PostDetails = () => {
  const postId = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [tags, setTags] = useState();

  useEffect(() => {
    getPostById(postId)
      .then(setPost)
      .then(getCommentsByPostId(postId))
      .then(setComments)
      .then(getTagsByPostId(postId))
      .then(setTags);
  }, []);

  return (
      <>
      <Card>
          <CardTitle>{post.title}</CardTitle>
      </Card>
      </>
  )
};
