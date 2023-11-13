import Modal from 'components/Modal';
import EconomyClass from 'pages/EconomyClass';
import Home from 'pages/Home';
import Ledger from 'pages/Ledger';
import Login from 'pages/Login';
import MyPage from 'pages/MyPage';
import PiggyBank from 'pages/PiggyBank';
import GuideIndex from 'pages/GuideIndex';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/guideIndex' element={<GuideIndex />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/ledger' element={<Ledger/>} />
      <Route path='/piggyBank' element={<PiggyBank/>} />
      <Route path='/economyClass' element={<EconomyClass/>} />
      <Route path='/myPage' element={<MyPage/>} />
    </Routes>
  );
}

export default App;
