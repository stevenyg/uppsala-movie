import HomePage from './views/HomePage.jsx';
import DetailPage from './views/DetailPage.jsx';
import ResultPage from './views/ResultPage.jsx';
import { Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <>
       <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:slug/:id" element={<DetailPage />} />
  
        <Route path="/result/:search" element={<ResultPage />} />
        <Route path="/result" element={<HomePage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
