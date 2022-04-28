import React, { useState, useEffect, useRef } from "react";
import "../globalcss/global.css";
import Pagination from "../component/Pagination";
import { handleList } from "../Utils/globalFunctions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "../Home/Logout";
import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
export default function ProductListing(props) {
  const queryString = require("query-string");
  const parsed = queryString.parse(window.location.search);
  const navigate = useNavigate();
  const [productList, setproductList] = useState([]);
  const [listdata, setlistdata] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const url = "https://fakestoreapi.com/products";
  let itemsPerPage = 10;
  let count = useRef([]);
  let itemoffset = (parsed.page || 1) - 1;
  const getListing = () => {
    axios.get(url).then((res) => {
      count.current = handleList(res?.data);
      setlistdata(count.current);
      localStorage.setItem("listData", JSON.stringify(count.current));
      setproductList(
        count.current.slice(itemoffset * 10, itemoffset * 10 + itemsPerPage)
      );
      setpageCount(Math.ceil(count.current.length / itemsPerPage));
    });
  };
  useEffect(() => {
    getListing();
  }, []);
  const handlePagination = (event) => {
    let browserURl = `/product-listing/?page=${event.selected + 1}`;
    navigate(browserURl);
  };
  const managePage = () => {
    setproductList(
      listdata.slice(itemoffset * 10, itemoffset * 10 + itemsPerPage)
    );
    setpageCount(Math.ceil(listdata.length / itemsPerPage));
  };
  useEffect(() => {
    managePage();
  }, [parsed.page]);
  return (
    <div className="manage-res">
      <div>
        <Logout />
      </div>
      <div>
        {productList &&
          productList.map((prop, index) => {
            const { id, title, image } = prop;
            return (
              <div key={index} className="manage-card">
                <Card className="card manage-style">
                  <CardContent>
                    <h3>{title}</h3>
                  </CardContent>
                  <Link to={`/product-detail/${id}`}>
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
