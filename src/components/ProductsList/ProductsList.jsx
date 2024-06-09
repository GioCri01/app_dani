import React from "react";
import "./ProductList.css";
import { productList } from "../../services/products.services";
import { useNavigate } from "react-router";
import SeparatorLine from "../SeparatorLine/SeparatorLine";

const ProductsList = () => {
  const navigate = useNavigate();
  console.log("productList", productList);
  return (
  
      <div className="ProductsList">
        {productList.map((item,i) => (
          <div key={i} className="itemListProduct">
            <div
              style={{
                backgroundImage: `url(${item.img_prodotto})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundColor: 'rgb(231, 151, 2)',
                width: "100%",
                height: "100%",
                backgroundRepeat:'no-repeat'
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


