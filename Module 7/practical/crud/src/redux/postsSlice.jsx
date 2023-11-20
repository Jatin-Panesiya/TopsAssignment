import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../Items";

const postsReducer = createSlice({
  name: "posts",
  initialState: {
    posts: items,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((data) => data.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, itemName, price, category } = action.payload;
      const selectedData = state.posts.find((data) => data.id === id);
      selectedData.id = id;
      selectedData.itemName = itemName;
      selectedData.price = price;
      selectedData.category = category;
    },
  },
});

export const { addPost, removePost, updatePost } = postsReducer.actions;
export default postsReducer.reducer;
