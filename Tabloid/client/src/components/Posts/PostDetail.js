import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardTitle } from "reactstrap";
import { getPostById } from "../../modules/postManager";

export const PostDetails = () => {
  const postIdasString = useParams();
  const [post, setPost] = useState();
//   const [comments, setComments] = useState();
//   const [tags, setTags] = useState();

  useEffect(() => {
    getPostById(parseInt(postIdasString))
      .then(setPost)
    //   .then(getCommentsByPostId(postId))
    //   .then(setComments)
    //   .then(getTagsByPostId(postId))
    //   .then(setTags);
  }, []);

  return (
      <>
       <div>
        <Card >
          <CardBody>
            <div className="post-content">
              <CardTitle> {post.title} </CardTitle>
              <CardText>{post.content}</CardText>
            </div>
            <div className="post-details">
              <CardSubtitle>{post.publishedDateTime} </CardSubtitle>
            </div>
          </CardBody>
          <img src={post.imageLocation} alt={post.title} />
        </Card>
      </div>
      </>
  )
};
