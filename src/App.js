import logo from './logo.svg';
import './App.css';
import Topbar from './component/topbar/Topbar';
import HomePage from './component/home/HomePage';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Route, Router, Routes } from 'react-router-dom';
import SinglePost from './component/singlePost/SinglePost';

function App() {
  const user = false
  
  
  return (
   <>
   <Topbar/>
   <Routes>
    <Route exact path='/' element = {<HomePage/>}/>
    <Route exact path='/register' element = {user ? <HomePage/> :<Register/>}/>
    <Route exact path='/login' element={user ? <HomePage/> :<Login/>}/>
    <Route exact path='/write' element= { user ? <Write/> : <Register/>}/>
    <Route exact path='/settings' element = {user ? <Settings/> : <Register/>}/>
    <Route exact path='/post/:postId' element = {<Single/>}/>
    <Route exact path='/register' element = {<Register/>}/>
    <Route exact path='/singlepost' element= {<SinglePost/>}/>
  
  



   </Routes>
   
  
   
   </>
  );
}

export default App;
