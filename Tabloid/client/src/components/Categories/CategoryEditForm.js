import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { updateCategory } from "../../modules/categoryManager";
import { getAllCategories } from '../../modules/categoryManager';
import { useHistory } from 'react-router';

const CategoryForm = () => {
  const emptyCategory = {
    name: ''
  };

  const [category, setCategory] = useState(emptyCategory);
  const history = useHistory()

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const categoryCopy = { ...category };

    categoryCopy[key] = value;
    setCategory(categoryCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    updateCategory(category).then(() => {
      setCategory(emptyCategory);
      getAllCategories();
      history.push("/categories")
    });
  };

  return (
    <Form>
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

export default CategoryForm;