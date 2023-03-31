import { useState } from "react";
import "../../styles/addCategory.css";

export default function AddCategory() {
  const [categoryImage, setCategoryImage] = useState();
  const [categoryName, setCategoryName] = useState({
    name: "",
  });

  console.log(categoryName);

  // console.log("categoryName", JSON.stringify(categoryName));
  function nameHandler(e) {
    setCategoryName({ [e.target.name]: e.target.value });
    console.log(categoryName);
  }

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
      console.log(res, "res");
    });
    setCategoryName("");
    setCategoryImage("");
  }

  return (
    <div className="addCategory">
      <form>
        <input
          type="text"
          name="name"
          placeholder="category name"
          onChange={nameHandler}
          // value={categoryName}
        />
        <input
          type="file"
          placeholder="category image"
          onChange={(e) => setCategoryImage(e.target.files[0])}
        />
        <input
          type="submit"
          value={"Create category"}
          onClick={categoryUploader}
        />
      </form>
    </div>
  );
}
