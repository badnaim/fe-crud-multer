import axios from "axios";
import { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";

export default function AddProduct() {
  const [categories, setCategories] = useState();
  const [file, setFile] = useState();
  const [data, setData] = useState({
    name: "",
    price: null,
    stock: null,
    sale: null,
    brand: "",
    category: "",
    description: "",
  });


  function changeHandler(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });

  }

  function categChange(e) {
    const chosenCategory = categories.find((categ) => categ.name === e.target.value);
    console.log(chosenCategory._id);
    setData({ ...data, category: `${chosenCategory._id}` });
    // console.log(data);
  }
  function uploadHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify(data));
    console.log("addproduct uploading");
    fetch("http://localhost:4000/addproduct", {
      method: "POST",
      body: formData,
      // headers: {
      //   "content-Type":"multipart/form-data"
      // }
    }).then((res) => console.log(res, "create product request sent"));
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/getCategories")
      .then((res) => {
        setCategories(res.data.body);
        // console.log("c", categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div><h4>Create product</h4></div>
      <form>
        <br />
        <label>product name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <br />
        <label>price</label>
        <br />
        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <br />
        <label>stock</label>
        <br />
        <input
          type="number"
          name="stock"
          placeholder="stock"
          onChange={handleChange}
        />
        <br />
        <label>sale %</label>
        <br />
        <input
          type="number"
          name="sale"
          placeholder="sale"
          onChange={handleChange}
        />
        <br />
        <label>specs</label>
        <br />
        <input
          type="text"
          name="specs"
          placeholder="specs"
          onChange={handleChange}
        />
        <br />
        <label>brand</label>
        <br />
        <input
          type="text"
          name="brand"
          placeholder="brand"
          onChange={handleChange}
        />
        <br />
        <label>category</label>
        <br />
        <select name="category" onChange={(e) => categChange(e)}>
          <option disabled>select category</option>
          {categories &&
            categories.map((category, index) => (
              <option onClick={(e) => console.log(e.name)} key={index}>
                {category.name}
              </option>
            ))}
        </select>
        <br />
        <label>description</label>
        <br />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <br />
        <label>file</label>
        <br />
        <input type="file" onChange={changeHandler} />
        <br />
        <br />
        <input type="submit" onClick={uploadHandler} value={"Upload"} />
      </form>
    </div>
  );
}
