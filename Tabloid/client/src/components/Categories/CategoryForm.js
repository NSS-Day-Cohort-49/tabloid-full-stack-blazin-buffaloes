import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCategory } from "../../modules/categoryManager";

const CategoryForm = ({ getCategories }) => {
  const emptyCategory = {
    title: '',
    description: '',
    url: ''
  };

  const [category, setCategory] = useState(emptyCategory);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const categoryCopy = { ...category };

    categoryCopy[key] = value;
    setCategory(categoryCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addCategory(category).then(() => {
      setCategory(emptyCategory);
      getCategories();
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="category title"
          value={category.title}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  );
};

export default CategoryForm;
