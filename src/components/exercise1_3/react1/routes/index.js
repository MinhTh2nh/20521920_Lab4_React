import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Contact from "../pages/contact";
import Login from "../pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;