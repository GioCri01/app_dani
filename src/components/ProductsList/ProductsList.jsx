import React, { useEffect, useRef } from "react";
import "./ProductList.css";
import { productList } from "../../services/products.services";
import { useNavigate } from "react-router";
import SeparatorLine from "../SeparatorLine/SeparatorLine";

const ProductsList = ({scrollTrigger}) => {
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    
    if (scrollTrigger === "prodotti") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTrigger]);

  return (
    <div ref={ref} className="ProductsList">
      {productList.map((item, i) => (
        <div key={i} className="itemListProduct">
          <div
          className="bg-img"
            style={{
              backgroundImage: `url(${item.img_prodotto})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundColor: "rgb(231, 151, 2)",
              // width: "65%",
              height: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="description-product">
            <h2>{item.nome_prodotto}</h2>
            <p>{item.descrizione_prodotto}</p>
            <button
              className="button-50"
              onClick={() => navigate("/detail/" + item.nome_prodotto)}
            >
              SCOPRI DI PIU
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
