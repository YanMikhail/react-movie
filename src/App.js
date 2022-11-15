import {Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Favourites from "./pages/Favourites/Favourites";
import History from "./pages/History/History";
import MoviePage from "./pages/MoviePage/MoviePage";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='favourites' element={<Favourites/>}/>
          <Route path='history' element={<History/>}/>
          <Route path='/movie/:id' element={<MoviePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
