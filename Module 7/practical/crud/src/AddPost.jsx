import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./redux/postsSlice";
import { useDispatch } from "react-redux";

const AddPost = () => {
  const defaultData = { id: nanoid(), itemName: "", price: "", category: "" };

  const [data, setData] = useState(defaultData);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addPost(data));
    setData(defaultData);
  };

  return (
    <div>
      <div className="grid w-96 mx-auto my-3 gap-1">
        <input
          type="text"
          name="itemName"
          placeholder="Item Name *"
          className="border border-black rounded px-3 py-1"
          onChange={handleInput}
          value={data.itemName}
        />
        <input
          type="text"
          name="price"
          placeholder="Price *"
          className="border border-black rounded px-3 py-1"
          onChange={handleInput}
          value={data.price}
        />
        <input
          type="text"
          name="category"
          placeholder="Category *"
          className="border border-black rounded px-3 py-1"
          onChange={handleInput}
          value={data.category}
        />
        <button onClick={handleAdd} className="bg-emerald-400">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddPost;
