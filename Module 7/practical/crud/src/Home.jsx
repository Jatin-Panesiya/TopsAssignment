import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./redux/authSlice";
import AddPost from "./AddPost";
import { removePost } from "./redux/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Home = () => {
  const users = useSelector((state) => state.authReducer.users);
  const posts = useSelector((state) => state.posts.posts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  return (
    <div>
      <header className="flex items-center justify-between py-3 px-5 mb-3 bg-slate-200">
        <p className="capitalize text-xl">Welcome </p>
        
      </header>
      <Link
        to="/addItem"
        className="bg-cyan-400 px-7 py-1 rounded  font-semibold m-3"
      >
        Add Item
      </Link>


    <div className="overflow-x-auto">
      <table className="w-full text-center " border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.itemName}</td>
                <td>{e.price}</td>
                <td>{e.category}</td>
                <td>
                  <button
                    className="bg-red-400 rounded px-3 mx-1 my-1"
                    onClick={() => handleRemove(e.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit/${e.id}`}
                    className="bg-emerald-400 rounded px-3 mx-1 my-1"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table></div>
    </div>
  );
};

export default Home;
