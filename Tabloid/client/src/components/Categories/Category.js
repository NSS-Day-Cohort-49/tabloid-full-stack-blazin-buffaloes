import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


export const Category = ({ category }) => {
  return (
    <>
      <div>
        <Card >
          <CardBody>
            <div className="category-content">
                {console.log(category)}
              <CardTitle> {category.name} </CardTitle>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
