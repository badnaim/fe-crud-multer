import { useState } from "react";
// import { ProductsContext } from "../../context/ProductsContext";
import "../../styles/addCategory.css";

export default function AddCategory() {
  const [categoryImage, setCategoryImage] = useState();
  const [categoryName, setCategoryName] = useState({
    name: "",
  });

  function nameHandler(e) {
    setCategoryName({ [e.target.name]: e.target.value });
  }
  console.log(categoryName);

  function imageHandler(e) {
    setCategoryImage(e.target.files[0]);
  }
  console.log(categoryImage);

  async function categoryUploader(e) {
    e.preventDefault();
    const categData = new FormData();
    categData.append("file", categoryImage);
    categData.append("name", JSON.stringify(categoryName));
    console.log("category uploaded");
    fetch("http://localhost:4000/addCategory", {
      method: "POST",
      body: categData,
    }).then((res) => {
      console.log("create request sent");
    });
    setCategoryName("");
    setCategoryImage("");
  }

  return (
    <div className="addCategory">
      <div><h4>Create category</h4></div>
      <form>
        <br />
        <label>category name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="category name"
          onChange={nameHandler}
        />
        <br />
        <br />
        <label>gategory image</label>
        <br />
        <input
          type="file"
          placeholder="category image"
          onChange={imageHandler}
        />
        <br />
        <br />
        <input
          type="submit"
          value={"Create category"}
          onClick={categoryUploader}
        />
      </form>
    </div>
  );
}
