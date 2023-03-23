import { useState } from "react";
// import axios from "axios";

export default function AddProduct() {
  const [file, setFile] = useState();
  const [data, setData] = useState({
    name: "",
    price: null,
    stock: null,
    sale: null,
    brand: "",
    category: "",
    description: ""
  });
  // const [prod, setProd] = useState({});

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  function changeHandler(e) {
    console.log(e.target.files[0]);
    const dataImg = new FormData();
    data.append("file", e.target.files[0]);
    // data.append("text", "this is a test mf");
    setFile(dataImg);
  }


  function uploadHandler() {
    console.log("uploading");
    fetch("http://localhost:4000/addproduct", {
      method: "POST",
      body: file,
      // JSON.stringify({data}),
    }).then((res) => console.log(res));
  }



  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="name" onChange={handleChange} />
        <input type="number" name="price" placeholder="price" onChange={handleChange} />
        <input type="number" name="stock" placeholder="stock" onChange={handleChange} />
        <input type="number" name="sale" placeholder="sale" onChange={handleChange} />
        <input type="text" name="specs" placeholder="specs" onChange={handleChange} />
        <input type="text" name="brand" placeholder="brand" onChange={handleChange} />
        <input type="text" name="category" placeholder="category" onChange={handleChange} />
        <input type="text" name="description" placeholder="description" onChange={handleChange} />
        <br />
        <label>file</label>
        <br />
        <input type="file" onChange={changeHandler} />
        <input type="submit" onClick={uploadHandler} value={"Upload"} />
      </form>
    </div>
  );
}
