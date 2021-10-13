import React, { useEffect, useState } from "react";
import { addCategory, getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category"

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(categories => setCategories(categories));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
        Categories
      {categories.map(category => 
        <Category key={category.id} category={category} />
      )}
      <button onClick={addCategory}></button>
    </div>
  );
}

export default CategoryList;
