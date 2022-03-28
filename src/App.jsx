import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Banner } from "./components";
import "./App.css";
import { TodoPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
