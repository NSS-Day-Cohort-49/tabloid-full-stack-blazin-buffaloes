import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";


export const Category = ({ c }) => {
  return (
    <>
      <div>
        <Card >
          <CardBody>
            <div className="post-content">
              <CardTitle> {c.Name} </CardTitle>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
