import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {  getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category"



const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  
  // const getCategories = () => {
    //   getAllCategories().then(categories => setCategories(categories));
    // };
    
    let togglebool = true;

  const history = useHistory();
    const addCategory = () =>{
        history.push("/categories/add");
    }

  useEffect(() => {
    getAllCategories().then(setCategories);
    // getCategories();
  }, [togglebool]);

  return (
    <div>
      {console.log(categories)}
        Categories
        <button onClick={addCategory}>Add Category</button>
      {categories.map(category => 
        <Category key={category.id} category={category} togglebool={togglebool}/>
      )}
    </div>
  );
}

export default CategoryList;