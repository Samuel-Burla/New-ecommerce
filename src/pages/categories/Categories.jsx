// import React from 'react';
import { useEffect, useState } from "react";
import "./categories.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Category = ({ id, title, text }) => {
  // const id = 1;
  // const urlQuery = new URLSearchParams(id).toString();

  const deleteCategory = async (id) => {
    const categoryDoc = doc(db, "categories", id);
    await deleteDoc(categoryDoc);
  };
  return (
    <a href={`/products?${id}`} className="aCategories">
      <div className="category">
        <h3>{title}</h3>
        <p>{text}</p>
        <button type="button" onClick={()=>{deleteCategory(category.id)}}>
          Delete Category
        </button>
      </div>
    </a>
  );
};
const Categories = () => {
  const [inputTextCategory, setInputTextCategory] = useState("");
  const [inputTitleCategory, setInputTitleCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const categoriesCollection = collection(db, "categories");

  const createCategory = async () => {
    await addDoc(categoriesCollection, {
      text: inputTextCategory,
      title: inputTitleCategory,
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const dataCategories = await getDocs(categoriesCollection);
      setCategories(
        dataCategories.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getCategories();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Text"
          onChange={(event) => {
            setInputTextCategory(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setInputTitleCategory(event.target.value);
          }}
        />
        <button onClick={createCategory}>Create a category</button>
      </div>
      <div className="galleryContainer">
        <div className="gallery">
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              text={category.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
