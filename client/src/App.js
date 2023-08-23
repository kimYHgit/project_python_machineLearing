import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
