import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import "./Post.css";

export const Post = ({ post }) => {
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
  );
};
