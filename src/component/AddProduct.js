import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import {
  productStyle,
  submitStyle,
  mainStyle,
  commonLeftstyle,
  widthstyle,
} from "../Utils/globalFunctions";

export default function AddProduct() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let details = [
      {
        title: title,
        description: description,
        price: price,
      },
    ];
    if (title && description && price) {
      localStorage.setItem("items", JSON.stringify(details));
      alert("Product details saved at localstorage");
    } else {
      alert("Please enter all details");
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} style={mainStyle}>
          <div className="box1">
            <div style={productStyle}>
              <h1>Add Product</h1>
            </div>
            <div style={commonLeftstyle}>
              <h5>Title</h5>
              <div>
                <TextField
                  variant="outlined"
                  label="Enter Title"
                  style={widthstyle}
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
                  type="text "
                  name="Title"
                  id="Title"
                />
              </div>
            </div>
            <div style={commonLeftstyle}>
              <h5>Description</h5>
              <div>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Enter Description"
                  style={widthstyle}
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                  name="Description"
                  id="Description"
                />{" "}
              </div>
            </div>
            <div style={commonLeftstyle}>
              <h5>Price</h5>
              <div>
                {" "}
                <TextField
                  type="text"
                  variant="outlined"
                  label="Enter Price"
                  style={widthstyle}
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                  name="Price"
                  id="Price"
                />{" "}
              </div>
            </div>
            <div style={commonLeftstyle}>
              <h5>Add Image</h5>
              <div>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
              </div>
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                style={submitStyle}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
