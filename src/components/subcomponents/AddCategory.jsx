import react, { useState } from "react";
import "../../styles/addCategory.css";

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState({
    name: ""
  });
  const [categoryImage, setCategoryImage] = useState();

  function nameHandler(e) {
    setCategoryName({ [e.target.name]: e.target.value });
    console.log(categoryName);
  }

  function imageHandler(e) {
    console.log(e.target.files[0]);
    setCategoryImage(e.target.files[0]);
  }

  function categoryUploader(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", categoryImage);
    formData.append("name", JSON.stringify(categoryName));
    console.log(formData);
    fetch("http://localhost:4000/addCategory", {
      method: "POST",
      body: formData,
    }).then((res) => console.log(res));
  }

  return (
    <div className="addCategory">
      <input type="text" placeholder="category name" onChange={nameHandler} />
      <input type="file" placeholder="category image" onChange={imageHandler} />
      <button onClick={categoryUploader}>Add category</button>
    </div>
  );
}