import './App.css';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/UserContext';
import Home from './pages/Home';
import SignUp from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Cart from './pages/Cart'
import Error from './components/Error';
import React from 'react';
import 'typeface-inter';
import './sass/main.css'


function App() {
  const[currentUser, setCurrentUser] = useState("")
  return (
    <DataProvider value={{currentUser, setCurrentUser}}>
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<SignUp />}/>
              <Route path="/logout" element={<Logout />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        </Router>
    </DataProvider>
  )
}

export default App