import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getCategoryById, updateCategory } from "../../modules/categoryManager";
import { getAllCategories } from '../../modules/categoryManager';
import { useHistory, useParams } from 'react-router';

export const CategoryEditForm = () => {
  const history = useHistory()
  const {categoryId} = useParams();
  const categoryid = parseInt(categoryId);
  const[category, setCategory] = useState({
    id:categoryid,
    name:""
  });
  useEffect(() => {
    getCategoryById(categoryid)
    .then(setCategory)
  },[])
  const handleInputChange = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    const key = evt.target.id;

    const categoryCopy = { ...category };

    categoryCopy[key] = value;
    setCategory(categoryCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    updateCategory(category).then(
      history.push("/categories")
    );
  };



  return (
    <Form>
      {console.log(category)}
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="category name"
          value={category.name}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  );
};

export default CategoryEditForm;