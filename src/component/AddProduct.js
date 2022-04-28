import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { btn } from "../Utils/globalFunctions";
import { cloneDeep } from "lodash";
import { TextField } from "@material-ui/core";

export default function AddProduct() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [url, seturl] = useState("");
  const [validate, setvalidate] = useState(false);
  const [preview, setpreview] = useState(false);
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
    if (title && description && price && url) {
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
      seturl(cloneDeep(""));
      setvalidate(false);
      alert("Product Added Successfully");
    } else {
      setvalidate(true);
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
      document.getElementById("contained-button-file").value = null;
      seturl(cloneDeep(""));
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
      <Link to="/product-listing" className="decoration">
        <h4 className="button-style">Back</h4>
      </Link>
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
              <p className="error">
                {validate && !title.length && "Please enter title"}
              </p>
            </div>
            <div className="commonLeftstyle">
              <h5>Description</h5>
              <div>
                <TextField
                  disabled={description.length === 500}
                  type="text"
                  variant="outlined"
                  label="Enter Description"
                  className="width-style"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                  name="Description"
                  id="Description"
                  helperText={
                    description.length
                      ? `${500 - description.length} Characters Left`
                      : ""
                  }
                />
              </div>
              <p className="error">
                {validate && !description.length && "Please enter description"}{" "}
              </p>
            </div>
            <div className="commonLeftstyle">
              <h5>Price</h5>
              <div>
                <TextField
                  type="number"
                  variant="outlined"
                  label="Enter Price"
                  className="width-style"
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                  name="Price"
                  id="Price"
                />
              </div>
              <p className="error">
                {validate && !price.length && "Please enter price"}{" "}
              </p>
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

              {url && (
                <div style={{ display: "flex" }}>
                  <h6 className="pre-style" onClick={() => setpreview(true)}>
                    Preview
                  </h6>
                  {preview && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setpreview(false)}
                      className="cross"
                    >
                      <path
                        d="M10.6491 8.99995L17.6579 1.9909C18.1141 1.53499 18.1141 0.797843 17.6579 0.341933C17.202 -0.113978 16.4649 -0.113978 16.009 0.341933L8.99991 7.35099L1.99106 0.341933C1.53493 -0.113978 0.798003 -0.113978 0.342093 0.341933C-0.114031 0.797843 -0.114031 1.53499 0.342093 1.9909L7.35094 8.99995L0.342093 16.009C-0.114031 16.4649 -0.114031 17.2021 0.342093 17.658C0.569301 17.8854 0.868045 17.9996 1.16658 17.9996C1.46511 17.9996 1.76364 17.8854 1.99106 17.658L8.99991 10.6489L16.009 17.658C16.2364 17.8854 16.5349 17.9996 16.8335 17.9996C17.132 17.9996 17.4305 17.8854 17.6579 17.658C18.1141 17.2021 18.1141 16.4649 17.6579 16.009L10.6491 8.99995Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </div>
              )}
              {preview && <img src={url} className="pre-image" alt="" />}
              <p className="error">
                {validate && !url.length && "Please select image"}{" "}
              </p>
            </div>

            <div>{btn}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
