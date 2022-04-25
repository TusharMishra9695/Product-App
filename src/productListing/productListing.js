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
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 20;
  let count = [];

  useEffect(() => {
    getListing();
  }, []);
  function getListing() {
    const endOffset = itemOffset + itemsPerPage;
    const url = "https://fakestoreapi.com/products";
    axios.get(url).then((res) => {
      count = handleList(res?.data);
      setproductList(count.slice(itemOffset, endOffset));
      setpageCount(Math.ceil(count.length / itemsPerPage));
    });
  }

  function handlePagination() {
    console.log("accessable");
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
      <Pagination
        handleClick={() => handlePagination()}
        pageCount={pageCount}
      />
    </>
  );
}
