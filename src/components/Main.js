import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

const Main = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Home />}></Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default Main;
