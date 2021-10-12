import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";

export const Post = ({ p }) => {
  return (
    <>
      <div>
        <Card >
          <CardBody>
            <div className="post-content">
              <CardTitle> {p.Title} </CardTitle>
              <CardText>{p.Content}</CardText>
            </div>
            <div className="post-details">
              <CardSubtitle>{p.PublishedDateTime} </CardSubtitle>
            </div>
          </CardBody>
          <CardImg> {p.ImageLocation}</CardImg>
        </Card>
      </div>
    </>
  );
};
