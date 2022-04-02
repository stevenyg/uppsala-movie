import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage.jsx"
import LoginPage from "./views/LoginPage.jsx"
import RegisterPage from "./views/RegisterPage.jsx"
import MovieTable from './components/MovieTable.jsx';
import GenreTable from './components/GenreTable.jsx';
import MovieForm from './components/MovieForm.jsx';
import GenreForm from "./components/GenreForm.jsx";
import GenreUpdateForm from './components/GenreUpdateForm'
import MovieUpdateForm from './components/MovieUpdateForm'
import './App.css'
import RequireAuth from "./components/RequireAuth.jsx";

function App() {
  return (
    <>
      <div className="App">

      <Routes>

         <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={
          <RequireAuth>
        <HomePage />
         </RequireAuth>
        }>
          <Route path="MovieTable" element={<MovieTable />} />
          <Route path="GenreTable" element={<GenreTable />} />
          <Route path="MovieForm" element={<MovieForm />} />
          <Route path="MovieUpdateForm/:id" element={<MovieUpdateForm />} />
          <Route path="GenreForm" element={<GenreForm />} />
          <Route path="GenreUpdateForm/:id" element={<GenreUpdateForm />} />
        </Route>
     

      </Routes>

      </div>
      
    </>

  );
}

export default App;
