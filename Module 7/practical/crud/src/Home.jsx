import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./redux/authSlice";
import AddPost from "./AddPost";
import { removePost, updatePost } from "./redux/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Home = () => {
  const users = useSelector((state) => state.authReducer.users);
  const posts = useSelector((state) => state.posts.posts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (users === "") navigate("/");
  }, [navigate, users]);

  const handleLogout = () => {
    dispatch(logout(""));
    if (users === "") navigate("/");
  };
  const handleRemove = (id) => {
    dispatch(removePost(id));
  };
  const [isEditing, setIsEditing] = useState(false);
  const defaultData = { id: nanoid(), itemName: "", price: "", category: "" };
  const [data, setData] = useState(defaultData);

  const handleUpdate = (id) => {
    setIsEditing(true);
    const [selectedData] = posts.filter((data) => data.id === id);
    setData(selectedData);
  };

  const handleEdit = () => {
    setIsEditing(false);
    dispatch(updatePost());
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <header className="flex items-center justify-between py-3 px-5 bg-slate-200">
        <p className="capitalize text-xl">Welcome {users} !</p>
        <button
          onClick={handleLogout}
          className="text-red-500 font-semibold text-lg"
        >
          Logout
        </button>
      </header>

      <AddPost />

      {posts.length > 0 && (
        <div>
          {posts.map((e, i) => {
            return (
              <div key={i} className="flex items-center gap-2 px-2">
                <p>{e.itemName}</p>
                <button onClick={() => handleRemove(e.id)}>❌</button>
                <button onClick={() => handleUpdate(e.id)}>Edit</button>
              </div>
            );
          })}
        </div>
      )}
      {isEditing && (
        <>
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
          <button onClick={handleEdit} className="bg-emerald-400">
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
