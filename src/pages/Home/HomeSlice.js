import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHttpInstance from "../../Util/Axios";

export const fetchFypData = createAsyncThunk("Home/fetchFypData", async () => {
  const response = await AxiosHttpInstance.get("api/post/fyp");
  return response.data;
});

const HomeSlice = createSlice({
  name: "Home",
  initialState: {
    fypData: [],
  },
  reducers: {
    updateHomeState: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFypData.fulfilled, (state, action) => {
      state.fypData = Array.from(action.payload.data).reverse();
    });
  },
});

export const { updateHomeState } = HomeSlice.actions;

export default HomeSlice.reducer;
