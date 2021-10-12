import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../modules/categoryManager";
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
        {console.log(categories)}
      {categories.map(category => 
        <Category key={category.id} category={category} />
      )}
    </div>
  );
}

export default CategoryList;
