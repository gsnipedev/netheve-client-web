import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import LoginCard from "./pages/Login";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import RegisterCard from "./pages/Register";
import { fetchLocalFollower, fetchLocalFollowing, fetchUserData } from "./Util/Slices/LocalUserDataSlice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />}></Route>
        </Route>
        <Route path="/login" element={<LoginCard />} />
        <Route path="/register" element={<RegisterCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
