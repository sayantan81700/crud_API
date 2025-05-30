import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskApp from "../components/TaskApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
