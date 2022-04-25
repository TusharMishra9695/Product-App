import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>Development Going On !!!</h2>
      <Link to="/product-listing">Visit Product Listing Page</Link>
    </div>
  );
}
