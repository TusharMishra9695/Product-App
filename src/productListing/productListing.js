import React, { useState, useEffect } from "react";
import "../globalcss/global.css";
import Pagination from "../component/Pagination";
import { handleList, style } from "../Utils/globalFunctions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "../Home/Logout";
import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
export default function ProductListing(props) {
  const navigate = useNavigate();
  const [productList, setproductList] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const url = "https://fakestoreapi.com/products";
  let itemsPerPage = 10;
  let count = [];
  let event = window.location.hash.split("#");

  useEffect(() => {
    getListing();
  }, [event[1]]);
  function getListing() {
    let itemoffset = (event[1] || 1) - 1;
    axios.get(url).then((res) => {
      count = handleList(res?.data);
      setproductList(
        count.slice(itemoffset * 10, itemoffset * 10 + itemsPerPage)
      );
      setpageCount(Math.ceil(count.length / itemsPerPage));
    });
  }
  function handlePagination(event) {
    let browserURl = `/product-listing/#${event.selected + 1}`;
    navigate(browserURl);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Logout />
      </div>
      <div>
        {productList &&
          productList.map((prop, index) => {
            const { id, title, image } = prop;
            return (
              <div key={index} className="manage-card">
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
      </div>
      <div className="responsive-ul">
        <Pagination handleClick={handlePagination} pageCount={pageCount} />
      </div>
    </div>
  );
}
