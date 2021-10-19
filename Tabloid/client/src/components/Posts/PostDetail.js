import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardTitle,CardText,CardBody, CardSubtitle } from "reactstrap";
import { getPostById } from "../../modules/postManager";

export const PostDetails = () => {
  const  postIdasString  = useParams();
  const postId = parseInt(postIdasString.postId)
  const [post, setPost] = useState({
    title : "",
    content : "",
    publishedDateTime :"",
    imageLocation : "",
    title : "",
  });
//   const [comments, setComments] = useState();
//   const [tags, setTags] = useState();

  useEffect(() => {
    getPostById(postId)
      .then(setPost)
    //   .then(getCommentsByPostId(postId))
    //   .then(setComments)
    //   .then(getTagsByPostId(postId))
    //   .then(setTags);
  }, []);

  return (
      <>
            <h1>Post Detail</h1>
            {console.log(post)}
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
