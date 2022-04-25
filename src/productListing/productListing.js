import React, { useState, useEffect } from "react";
import "../globalcss/global.css";
import Pagination from "../component/Pagination";
import { handleList, style } from "../Utils/globalFunctions";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
export default function ProductListing() {
  const [productList, setproductList] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const url = "https://fakestoreapi.com/products";
  let itemsPerPage = 10;
  let count = [];

  useEffect(() => {
    getListing();
  }, []);
  function getListing() {
    axios.get(url).then((res) => {
      count = handleList(res?.data);
      setproductList(count.slice(0, 10));
      setpageCount(Math.ceil(count.length / itemsPerPage));
    });
  }

  function handlePagination(event) {
    axios.get(url).then((res) => {
      count = handleList(res?.data);
      setproductList(
        count.slice(event.selected * 10, event.selected * 10 + itemsPerPage)
      );
      setpageCount(Math.ceil(count.length / itemsPerPage));
    });
  }

  return (
    <>
      {productList &&
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
        })}
      <Pagination handleClick={handlePagination} pageCount={pageCount} />
    </>
  );
}
