import React, { useState } from "react";
import axios from "axios";
import { btn } from "../Utils/globalFunctions";
import { cloneDeep } from "lodash";
import { TextField } from "@material-ui/core";

export default function AddProduct() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [url, seturl] = useState("");
  const [id, setid] = useState(51);
  cloneDeep("");
  function handleSubmit(e) {
    e.preventDefault();
    let details = {
      id: id,
      title: title,
      description: description,
      price: price,
      image: url,
    };
    if (title && description && price) {
      if (!localStorage.getItem("items")) {
        localStorage.setItem("items", "[]");
      }
      let old_details = JSON.parse(localStorage.getItem("items"));
      old_details.push(details);
      localStorage.setItem("items", JSON.stringify(old_details));
      setid(id + 1);
      settitle(cloneDeep(""));
      setdescription(cloneDeep(""));
      setprice(cloneDeep(""));
      alert("Product Added Successfully");
    } else {
      alert("Please enter all details");
    }
  }
  const handleChange = (event) => {
    let image = event.target.files[0];
    const size = image.size / 1024 / 1024;
    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      alert("select valid image.");
      return false;
    }
    if (size > 10) {
      alert("Please upload a file smaller than 10 MB");
    } else {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "product-app");
      data.append("cloud_name", "ramdomfileupload");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/ramdomfileupload/image/upload",
          data
        )
        .then((res) => {
          alert("Image Upload Successfully");
          seturl(res.data.url);
        });
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="main-style">
          <div className="box1">
            <div className="product-style">
              <h1>Add Product</h1>
            </div>
            <div className="commonLeftstyle">
              <h5>Title</h5>
              <div>
                <TextField
                  variant="outlined"
                  label="Enter Title"
                  className="width-style"
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
                  type="text "
                  name="Title"
                  id="Title"
                />
              </div>
            </div>
            <div className="commonLeftstyle">
              <h5>Description</h5>
              <div>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Enter Description"
                  className="width-style"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                  name="Description"
                  id="Description"
                />{" "}
              </div>
            </div>
            <div className="commonLeftstyle">
              <h5>Price</h5>
              <div>
                {" "}
                <TextField
                  type="text"
                  variant="outlined"
                  label="Enter Price"
                  className="width-style"
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                  name="Price"
                  id="Price"
                />{" "}
              </div>
            </div>
            <div className="commonLeftstyle">
              <h5>Add Image</h5>
              <div>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>{btn}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
