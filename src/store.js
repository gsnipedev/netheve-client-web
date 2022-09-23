import { configureStore } from "@reduxjs/toolkit";
import PostCardDataSlice from "./components/PublicPostCard/PostCardDataSlice";
import HomeSlice from "./pages/Home/HomeSlice";

export default configureStore({
  reducer: {
    PostCardData: PostCardDataSlice,
    Home: HomeSlice,
  },
});
