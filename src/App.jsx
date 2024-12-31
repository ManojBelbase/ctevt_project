import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./auth/Login";
import About from "./pages/About";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

const App = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <Routes className="text-3xl font-bold underline">
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
