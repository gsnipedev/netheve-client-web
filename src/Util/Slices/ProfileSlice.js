import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHttpInstance from "../Axios";

export const fetchFollowingData = createAsyncThunk("ProfileData/fetchFollowingData", async (id) => {
  const response = await AxiosHttpInstance.get(`api/follow?id=${id}&type=following`);
  const data = response.data;
  return data;
});

export const fetchFollowerData = createAsyncThunk("ProfileData/fetchFollowerData", async (id) => {
  const response = await AxiosHttpInstance.get(`api/follow?id=${id}&type=follower`);
  const data = response.data;
  return data;
});

export const fetchProfileData = createAsyncThunk("ProfileData/fetchProfileData", async (id) => {
  const response = await AxiosHttpInstance.get("api/account/" + id);
  const data = response.data.data.userData;
  return data;
});

const ProfileData = createSlice({
  name: "ProfileData",
  initialState: {
    currentWorkingId: 0,
    username: "",
    fullname: "",
    postCount: 0,
    followerCount: 0,
    followingCount: 0,
    following: [],
    follower: [],
  },
  reducers: {
    refreshId: (state, action) => {
      state.currentWorkingId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFollowingData.fulfilled, (state, action) => {
      state.followingCount = action.payload.data.length;
      state.following = action.payload.data;
    });
    builder.addCase(fetchFollowerData.fulfilled, (state, action) => {
      state.followerCount = action.payload.data.length;
      state.follower = action.payload.data;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.fullname = action.payload.firstname + " " + action.payload.lastname;
    });
  },
});
export const { refreshId } = ProfileData.actions;
export default ProfileData.reducer;
