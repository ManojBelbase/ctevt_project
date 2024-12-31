import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./auth/Login";
import GetAllUsers from "./auth/getAllUsers";
import About from "./pages/About";

const App = () => {
  return (
    <Routes className="text-3xl font-bold underline">
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getAllUser" element={<GetAllUsers />} />
      </Route>
    </Routes>
  );
};

export default App;
