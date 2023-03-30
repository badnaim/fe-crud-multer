import { useEffect } from "react";
import { useState } from "react";
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
    console.log(e.target.files[0]);
    setCategoryImage(e.target.files[0]);
  }
  // console.log("categ img", categoryImage);

  console.log("ghj", JSON.stringify(categoryName));

  async function categoryUploader(e) {
    e.preventDefault();
    const categData = new FormData();
    categData.append("file", categoryImage);
    categData.append("name", JSON.stringify(categoryName));
    console.log("uploading");
    fetch("http://localhost:4000/addCategory", {
      method: "POST",
      body: categData,
    }).then((res) => {
      console.log(res, "res");
    });
    // form input clear hiih ^^^^^^^

    // useEffect(() => {
    //   setCategoryImage((e.target.value = ""));
    //   setCategoryName((e.target.value = ""));
    // }, []);
  }

  return (
    <div className="addCategory">
      <form>
        <input
          name="name"
          type="text"
          placeholder="category name"
          onChange={nameHandler}
          // value={categoryName}
        />
        <input
          type="file"
          placeholder="category image"
          onChange={imageHandler}
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
