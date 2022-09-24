import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHttpInstance from "../Axios";

const localId = localStorage.getItem("user_id");

export const fetchUserData = createAsyncThunk("LocalUserData/fetchUserData", async () => {
  const response = await AxiosHttpInstance.get("api/account/" + localId);
  const data = response.data.data;
  return data;
});

export const fetchLocalFollowing = createAsyncThunk("LocalUserData/fetchLocalFollowing", async () => {
  const response = await AxiosHttpInstance.get(`api/follow?id=${localId}&type=following`);
  const data = response.data;
  return data;
});

export const fetchLocalFollower = createAsyncThunk("LocalUserData/fetchLocalFollower", async () => {
  const response = await AxiosHttpInstance.get(`api/follow?id=${localId}&type=follower`);
  const data = response.data;
  return data;
});

const LocalUserData = createSlice({
  name: "LocalUserData",
  initialState: {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    following: [],
    follower: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      const accountData = action.payload;
      const userData = accountData.userData;

      state.username = accountData.username;
      state.firstname = userData.firstname;
      state.lastname = userData.lastname;
      state.email = userData.email;
    });
    builder.addCase(fetchLocalFollowing.fulfilled, (state, action) => {
      state.following = action.payload.data;
    });
    builder.addCase(fetchLocalFollower.fulfilled, (state, action) => {
      state.follower = action.payload.data;
    });
  },
});

export default LocalUserData.reducer;
