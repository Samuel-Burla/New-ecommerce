// import React from "react";
import "./products.css";
import lion from "../../assets/lion.jpg"
const smartphones = [
  {
    id: 0,
    title: "samsung galaxy 1",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 2",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 3",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 4",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 5",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 6",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 7",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 8",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 9",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
  {
    title: "samsung galaxy 10",
    text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 500 + "€",
  },
];

const Product = ({ title, text, price }) => {
  return (
    <div className="single_product_list">
      <div className="single_product">
        <div className="product_detail">
          <h3>{title}</h3>
          <p>Description: {text}</p>
          <p>Price: {price}</p>
        </div>
        <div className="product_image"><img src={lion} alt="lion" /></div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <>
      <section className="section_products">
        <h2 className="products">Smartphones</h2>
      </section>
      <section className="products_list">
        {smartphones.map((smartphone) => (
          <Product
            title={smartphone.title}
            text={smartphone.text}
            price={smartphone.price}
          />
        ))}
      </section>
    </>
  );
};

export default Products;
