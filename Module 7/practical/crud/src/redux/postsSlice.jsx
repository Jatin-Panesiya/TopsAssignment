import { createSlice } from "@reduxjs/toolkit";

const postsReducer = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((data) => data.id !== action.payload);
    },
    updatePost: () => {},
  },
});

export const { addPost, removePost, updatePost } = postsReducer.actions;
export default postsReducer.reducer;
