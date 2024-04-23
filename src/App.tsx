import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Post } from "./pages/Post";
import { Posts } from "./pages/Posts";
import { Publish } from "./pages/Publish";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//#######################2:26:41##########################