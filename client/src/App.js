import React, { useState, createContext } from 'react';
import './App.css';
import Header from './Components/Header';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import SellerDash from './Components/Dash/SellerDash';
import ClientDash from './Components/Dash/ClientDash';
import AccountType from './Components/AccountType';
import { Routes, Route } from 'react-router-dom';
export const AppContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const accessToken = localStorage.getItem('access');

  const tokenExists = accessToken !== null;

  return (
    <div className="">
      <AppContext.Provider value={{ loggedIn, setLoggedIn, tokenExists }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup/step1" element={<AccountType />} />
          <Route path="/sellerdash" element={<SellerDash />} />
          <Route path='/clientdash' element={<ClientDash />} />
        </Routes>
      </AppContext.Provider>

    </div>
  );
}

export default App;
