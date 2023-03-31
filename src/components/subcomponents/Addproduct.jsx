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

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function changeHandler(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
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
    }).then((res) => console.log(res));
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/getCategories")
      .then((res) => {
        setCategories(res.data.body);
        console.log(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("fdsf", categories);

  // const dob = categories.map((cat) => cat.name);
  // console.log("dob", dob);

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="stock"
          onChange={handleChange}
        />
        <input
          type="number"
          name="sale"
          placeholder="sale"
          onChange={handleChange}
        />
        <input
          type="text"
          name="specs"
          placeholder="specs"
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="brand"
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="category"
          placeholder="category"
          onChange={handleChange}
        /> */}

        {/* <label>select category</label> */}
        <select name="category" onChange={handleChange}>
          <option disabled>select category</option>
          {categories &&
            categories.map((x, y) => (
              <option onClick={() => console.log(x._id)} key={y}>
                {x.name}
              </option>
            ))}
        </select>
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
        <input type="submit" onClick={uploadHandler} value={"Upload"} />
      </form>
    </div>
  );
}
