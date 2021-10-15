import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// import { updateCategory } from "../../modules/categoryManager";
import { useHistory } from "react-router";
import { deleteCategory } from "../../modules/categoryManager";




  
export const Category = (props) => {
  const history = useHistory();
  const updateCategory = () => {
    history.push(`/categories/edit/${props.category.id}`);
  };

  const handleDelete = () => {
    props.onDelete();
    deleteCategory(props.category.id);
  };

  return (
    <>
      <div>
        <Card>
          <CardBody>
            <div className="category-content">
              <CardTitle> {props.category.name} </CardTitle>
            </div>
            <div className="btn btn-primary" onClick={updateCategory}>Edit</div>
            <div className="btn btn-primary" onClick={handleDelete}>
              Delete
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
