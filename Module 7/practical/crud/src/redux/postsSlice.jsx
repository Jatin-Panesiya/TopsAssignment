import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../Items";

const setLocalData = (state) => {
  localStorage.setItem('items', JSON.stringify(state.posts));
};

const localData = JSON.parse(localStorage.getItem('items')) || items;

const postsReducer = createSlice({
  name: "posts",
  initialState: {
    posts: localData,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
      setLocalData(state);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((data) => data.id !== action.payload);
      setLocalData(state);
    },
    updatePost: (state, action) => {
      const { id, itemName, price, category } = action.payload;
      state.posts = state.posts.map((data) => {
        if (data.id === id) {
          return { ...data, id, itemName, price, category };
        }
        return data;
      });
      setLocalData(state);
    },
  },
});

export const { addPost, removePost, updatePost } = postsReducer.actions;
export default postsReducer.reducer;
