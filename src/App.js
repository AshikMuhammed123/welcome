import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Student from "./student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;