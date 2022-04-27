import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  function lgout() {
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <h4 onClick={lgout} className="button-style">
          Logout
        </h4>
        <Link to="/add-product" style={{ textDecoration: "none" }}>
          <h4 className="button-style">Add Product</h4>
        </Link>
      </div>
    </>
  );
}
