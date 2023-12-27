import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
