import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./context/UserProvider";

import Navbar from "./components/Navbar";


import FormLayout from "./layouts/FormLayout";
import RequireAuthLayout from "./layouts/RequireAuthLayout";


import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import Register from "./routes/Register";
import Search from "./routes/Search";
import About from "./routes/About";
import Profile from "./routes/Profile";

const App = () => {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<RequireAuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Route>

        <Route path="/" element={<FormLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
