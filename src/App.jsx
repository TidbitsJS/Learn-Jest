import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Banner } from "./components";
import { TodoPage, FollowersPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TodoPage />} />
          <Route exact path="/followers" element={<FollowersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
