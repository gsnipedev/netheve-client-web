import { configureStore } from "@reduxjs/toolkit";
import ProfileCardSlice from "./components/ProfileCard/ProfileCardSlice";
import PostCardDataSlice from "./components/PublicPostCard/PostCardDataSlice";
import HomeSlice from "./pages/Home/HomeSlice";
import LocalUserDataSlice from "./Util/Slices/LocalUserDataSlice";
import ProfileSlice from "./Util/Slices/ProfileSlice";

export default configureStore({
  reducer: {
    PostCardData: PostCardDataSlice,
    Home: HomeSlice,
    Userdata: ProfileCardSlice,
    Profiledata: ProfileSlice,
    LocalUserData: LocalUserDataSlice,
  },
});
