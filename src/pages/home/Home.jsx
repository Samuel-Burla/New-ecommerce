// import React from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users");

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const addUser = async () => {
    await addDoc(usersCollection, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      const dataUsers = await getDocs(usersCollection);
      setUsers(dataUsers.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <div>
        <h2>Welcome to our e-commerce web site!</h2>
        <input
          type="text"
          placeholder="FirstName"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="LastName"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={addUser}>Create User</button>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>
                Hello {user.firstName} {user.lastName}({user.email})
              </h3>
              <button type="button" onClick={()=>{deleteUser(user.id)}}>Delete User</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
