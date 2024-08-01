import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  // updateDoc,
} from "firebase/firestore";
import "./categories.css";

// const Category = ({ id, title, text }) => {
//   // const id = 1;
//   // const urlQuery = new URLSearchParams(id).toString();

//   return (
//     <>
//       <div className="category">
//         <a href={`/products?${id}`} className="aCategories">
//           <h3>{title}</h3>
//           <p>{text}</p>
//         </a>
//         <button
//           type="button"
//           onClick={() => {
//             deleteCategory(id);
//           }}
//         >
//           Delete Category
//         </button>
//       </div>
//     </>
//   );
// };

const Categories = () => {
  const [editTitleInput, setEditTitleInput] = useState("");
  const [editTextInput, setEditTextInput] = useState("");

  const [addTitleInput, setAddTitleInput] = useState("");
  const [addTextInput, setAddTextInput] = useState("");

  const [categories, setCategories] = useState([]);
  const categoriesRef = collection(db, "categories");

  //The "CREATE" function
  const addCategory = async () => {
    await addDoc(categoriesRef, { title: addTitleInput, text: addTextInput });
  };

  //the useEffect hook used for READING the categories from the database
  useEffect(() => {
    //The "READ" function
    const getCategories = async () => {
      const categoriesData = await getDocs(categoriesRef);
      setCategories(
        categoriesData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getCategories();
  }, []);

  //The "UPDATE" function
  const editCategory = async (id) => {
    const categoryDocRef = doc(db, "categories", id);
    await updateDoc(categoryDocRef, {
      title: editTitleInput,
      text: editTextInput,
    });
  };

  //The "DELETE" function
  const deleteCategory = async (id) => {
    const categoryDocRef = doc(db, "categories", id);
    await deleteDoc(categoryDocRef);
  };

  return (
    <>
      <div className="create-form">
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setAddTitleInput(event.target.value);
          }}
        />
          <input
            type="text"
            placeholder="Text"
            onChange={(event) => {
              setAddTextInput(event.target.value);
            }}
          />
        <button onClick={addCategory}>Create a category</button>
      </div>
      <div className="galleryContainer">
        <div className="gallery">
          {categories.map((category) => (
            <>
              <div className="category">
                <a href={`/products?${category.id}`} className="aCategories">
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    deleteCategory(category.id);
                  }}
                >
                  Delete Category
                </button>
                <div className="edit-form">
                  <input
                    type="text"
                    placeholder="title"
                    onChange={(event) => {
                      setEditTitleInput(event.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="text"
                    onChange={(event) => {
                      setEditTextInput(event.target.value);
                    }}
                  />
                  <button
                    type="button"
                    id="button-form"
                    className="form-opened"
                    onClick={() => {
                      editCategory(category.id);
                    }}
                  >
                    Edit Category
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
