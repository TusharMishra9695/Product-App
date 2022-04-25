import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  function lgout() {
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <h4
      onClick={lgout}
      style={{
        cursor: "pointer",
        marginLeft: "60px",
        background: "black",
        color: "white",
        width: "150px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      Logout
    </h4>
  );
}
