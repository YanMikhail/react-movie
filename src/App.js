
import {Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Layout from "./components/Layout/Layout";
import {RequireAuth} from "./hoc/RequireAuth";
import {lazy, Suspense } from "react";
import {CircularProgress} from "@mui/material";
const Favourites = lazy(() => import('./pages/Favourites/Favourites'));
const History = lazy(() => import('./pages/History/History'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));



function App() {
  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='/search/:query' element={<SearchPage/>}/>
            <Route path='favourites' element={
              <RequireAuth>
                <Favourites/>
              </RequireAuth>
            }/>
            <Route path='history' element={
              <RequireAuth>
                <History/>
              </RequireAuth>
            }/>

            <Route path='/movie/:id' element={<MoviePage/>}/>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
