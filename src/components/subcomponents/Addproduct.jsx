import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [file, setFile] = useState();

  function uploadHandler() {
    console.log("uploading");
    fetch("http://localhost:8080/file", {
      method: "POST",
      body: file,
    }).then((res) => console.log(res));
  }

  function changeHandler(e) {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("text", "this is a test mf");
    setFile(data);
  }
  console.log(file);

  return (
    <div>
      <input type="file" onChange={changeHandler} />
      <input type="button" onClick={uploadHandler} value={"Upload"} />
    </div>
  );
}

