import { createSlice } from "@reduxjs/toolkit";
import AxiosHttpInstance from "../../Util/Axios/Axios";

const PostCardDataSlice = createSlice({
  name: "PostCardData",
  initialState: {
    value: null,
  },
  reducers: {
    refreshCard: (state, action) => {
      AxiosHttpInstance.get("/api/post/" + action.payload).then((response) => {
        const data = response.data.data;
        state.value = data;
      });
    },
  },
});
export const { refreshCard } = PostCardDataSlice.actions;
export default PostCardDataSlice.reducer;
