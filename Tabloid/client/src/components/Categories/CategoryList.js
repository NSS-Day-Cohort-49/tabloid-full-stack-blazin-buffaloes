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
      {categories.map(c => 
        <Category key={c.id} category={c} />
      )}
    </div>
  );
}

export default CategoryList;
