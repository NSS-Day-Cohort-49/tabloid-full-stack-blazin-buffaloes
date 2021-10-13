import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {  getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category"

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(categories => setCategories(categories));
  };

  const history = useHistory();
    const addCategory = () =>{
        history.push("/categories/add");
    }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
        Categories
        <button onClick={addCategory}>Add Category</button>
      {categories.map(category => 
        <Category key={category.id} category={category} />
      )}
    </div>
  );
}

export default CategoryList;
