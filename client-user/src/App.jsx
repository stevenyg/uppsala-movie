import HomePage from './views/HomePage.jsx';
import DetailPage from './views/DetailPage.jsx';
import ResultPage from './views/ResultPage.jsx';
import { Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
