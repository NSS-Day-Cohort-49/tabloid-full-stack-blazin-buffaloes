import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { updateCategory } from "../../modules/categoryManager";
import { useHistory } from "react-router";


export const Category = ({ category }) => {

  const history = useHistory();
    const updateCategory = () =>{
        history.push(`/categories/edit/${category.id}`);
    }

  return (
    <>
      <div>
        <Card >
          <CardBody>
            <div className="category-content">
              <CardTitle> {category.name} </CardTitle>
            </div>
            <button onClick={updateCategory}>Edit</button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
