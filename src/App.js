import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import QnA from './pages/QnA';
import CleaningType from './pages/CleaningType';
import Calculator from './pages/Сalculator';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='services' element={<Service />} />
          <Route path='qna' element={<QnA />} />
          <Route path='cleaning-type' element={<CleaningType />} />
          <Route path='calculator/:plc' element={<Calculator />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
