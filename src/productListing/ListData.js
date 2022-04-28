import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";

export default function ListData(props) {
  const { id, title, image } = props;
  return (
    <div className="manage-card">
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
}
