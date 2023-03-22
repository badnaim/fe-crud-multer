import { useState } from "react";
// import axios from "axios";

export default function AddProduct() {
  const [file, setFile] = useState();

  function uploadHandler() {
    console.log("uploading");
    fetch("http://localhost:4000/addproduct", {
      method: "POST",
      body: file,
    }).then((res) => console.log(res));
  }

  function changeHandler(e) {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    // data.append("text", "this is a test mf");
    setFile(data);
  }
  // console.log(setFile);

  return (
    <div>
      <form>
        {/* <label>name</label>
        <input type="text" />
        <label>price</label>
        <input type="number" />
        <label>stock</label>
        <input type="number" />
        <label>specs</label>
        <input type="text" /> */}
        <label>file</label>
        <input type="file" onChange={changeHandler} />
        <input type="button" onClick={uploadHandler} value={"Upload"} />
      </form>
      {/* <input type="number" value={"sale"} /> */}
      {/* <input type="text" value={"brand"} />
      <input type="text" value={"category"} />
      <input type="text" value={"description"} /> */}
    </div>
  );
}
