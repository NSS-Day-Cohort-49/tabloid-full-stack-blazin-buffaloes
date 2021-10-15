import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import "./Post.css";
import { deletePost } from "../../modules/postManager";

export const Post = (props) => {
  
  const history = useHistory();
  const handleClick = () => {
    history.push(`post/${props.post.id}`)
  }
  const handleDelete = () => {
    props.onDelete();
    deletePost(props.post.id);
  };

  return (
    <>      
      <div>
        <Card onClick={handleClick}>
          <CardBody>
            <div className="post-content">
              <CardTitle> {props.post.title} </CardTitle>
              <CardText>{props.post.content}</CardText>
            </div>
            <div className="post-details">
              <CardSubtitle>{props.post.publishedDateTime} </CardSubtitle>
            </div>
          </CardBody>
          <img src={props.post.imageLocation} alt={props.post.title} />
        </Card>
        <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};
