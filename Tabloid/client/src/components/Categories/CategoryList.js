import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {  getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category"



export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  
 
  const onDelete = () => {
    getAllCategories().then(setCategories);
  }
  

  const history = useHistory();
    const addCategory = () =>{
        history.push("/categories/add");
    }

  useEffect(() => {
    getAllCategories().then(setCategories);
    // getCategories();
  }, []);

  return (
    <div>
        Categories
        <button onClick={addCategory}>Add Category</button>
      {categories.map(category => 
        <Category key={category.id} category={category} onDelete={onDelete}/>
      )}
    </div>
  );
}

