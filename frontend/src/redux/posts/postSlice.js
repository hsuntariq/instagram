import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  postLoading: false,
  postError: false,
  postSuccess: false,
  postMessage: "",
};

export const addPost = createAsyncThunk(
  "add-post",
  async (postData, thunkAPI) => {
    try {
      let response = await axios.post(
        "http://localhost:5174/api/posts/add-post",
        postData,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postReset: (state) => {
      state.postLoading = false;
      state.postError = false;
      state.postSuccess = false;
      state.postMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postSuccess = true;
        state.posts = action.payload;
      });
  },
});

export const { postReset } = postSlice.actions;

export default postSlice.reducer;
