import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnswerPage from "./pages/AnswerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:id" element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
