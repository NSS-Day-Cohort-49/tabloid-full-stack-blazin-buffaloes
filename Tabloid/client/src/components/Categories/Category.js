import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// import { updateCategory } from "../../modules/categoryManager";
import { useHistory } from "react-router";
import { deleteCategory } from "../../modules/categoryManager";



  
export const Category = ({ category ,togglebool }) => {
  const history = useHistory();
  const updateCategory = () => {
    history.push(`/categories/edit/${category.id}`);
  };




  const handleDelete = () => {
    togglebool = !togglebool
    deleteCategory(category.id).then(history.push("/categories"));
  };

  return (
    <>
      <div>
        <Card>
          <CardBody>
            <div className="category-content">
              <CardTitle> {category.name} </CardTitle>
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
