import React, { useState, useEffect } from "react";
import "../globalcss/global.css";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
export default function ProductListing() {
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    getListing();
  }, []);
  function getListing() {
    const url = "https://fakestoreapi.com/products";
    axios.get(url).then((res) => {
      let a = [];
      for (let i = 0; i <= 2; i++) {
        // logic for 50 products because in API only 20 products are coming
        if (i === 2) {
          res?.data.slice(0, 10).map((data) => a.push(data));
        } else {
          res?.data.map((data) => a.push(data));
        }
      }
      setproductList(a);
    });
  }
  const style = {
    borderRadius: "20px",
    boxShadow: "1px 1px 2px 2px grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    productList &&
    productList.map((prop, index) => {
      const { id, title, image } = prop;
      return (
        <div key={index}>
          <Card className="card" style={style}>
            <CardContent>
              <small>{id}</small>
            </CardContent>
            <h3>{title}</h3>
            <Link to={`/product-listing/${id}`}>
              <img src={image} alt="error " className="Handleimg" />
            </Link>
          </Card>
        </div>
      );
    })
  );
}
