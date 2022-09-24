import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHttpInstance from "../../Util/Axios";

export const fetchUserData = createAsyncThunk("Userdata/fetchUserData", async () => {
  const response = await AxiosHttpInstance.get("api/account/" + localStorage.getItem("user_id"));
  return response.data;
});

const ProfileCardSlice = createSlice({
  name: "Userdata",
  initialState: {
    value: {
      username: "Unknown",
      displayInfo: "Well bruh",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.value.username = action.payload.data.username;
    });
  },
});

export default ProfileCardSlice.reducer;
