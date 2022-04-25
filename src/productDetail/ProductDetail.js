import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@material-ui/core";
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
  const style = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    productDetail && (
      <div>
        <Container>
          <Paper className="card2">
            <div style={style}>
              <div style={{ float: "left", marginLeft: "20px" }}>
                <img
                  src={productDetail.image}
                  alt="loading..."
                  className="Handleimg2"
                />
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
