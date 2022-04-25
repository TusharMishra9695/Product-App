import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Paper } from "@material-ui/core";
import Logout from "../Home/Logout";
import { styleDetail } from "../Utils/globalFunctions";
import axios from "axios";

export default function ProductDetail(props) {
  const [productDetail, setproductDetail] = useState([]);
  const params = useParams();
  useEffect(() => {
    getDetail();
  }, []);

  function getDetail() {
    const url = `https://fakestoreapi.com/products/${params.id}`;
    axios.get(url).then((res) => {
      setproductDetail(res?.data);
    });
  }

  return (
    productDetail && (
      <div>
        <Logout />
        <Container>
          <Paper className="card2">
            <div style={styleDetail}>
              <div style={{ float: "left", marginLeft: "20px" }}>
                <Link to="/">
                  <img
                    src={productDetail.image}
                    alt="loading..."
                    className="Handleimg2"
                  />
                </Link>
                <br />
                {productDetail.description}
                <hr style={{ width: "100%", maxWidth: "700px" }} />
              </div>
              <div>
                <h2>{productDetail.title}</h2>
                <h2>Price || {productDetail.price} $</h2>
              </div>
            </div>
          </Paper>
        </Container>
      </div>
    )
  );
}
