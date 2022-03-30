import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage.jsx"
import LoginPage from "./views/LoginPage.jsx"
import RegisterPage from "./views/RegisterPage.jsx"
import MovieTable from './components/MovieTable.jsx';
// import CastTable from './components/CastTable.jsx';
import CastForm from './components/CastForm.jsx';
import MovieForm from './components/MovieForm.jsx';
// import MovieCastForm from "./components/MovieCastForm.jsx";

import './App.css'
import RequireAuth from "./components/RequireAuth.jsx";

function App() {
  return (
    <>
      <div className="App">

      <Routes>
        <Route path="/" element={
          // <RequireAuth>
        <HomePage />
        // </RequireAuth>
        }>
          <Route path="MovieTable" element={<MovieTable />} />
          {/* <Route path="CastTable" element={<CastTable />} /> */}
          <Route path="CastForm/:id" element={<CastForm />} />
          <Route path="MovieForm" element={<MovieForm />} />
          {/* <Route path="MovieCastForm/:id" element={<MovieCastForm />} /> */}
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>

      </div>
      
    </>

  );
}

export default App;
