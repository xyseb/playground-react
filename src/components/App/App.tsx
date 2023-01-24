import React from 'react';
import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import CentreContextPage from '../Pages/CentreContextPage/CentreContextPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import CentreContextProvider from '../../contexts/CentreContextProvider';

function App() {
  
  return (
    <main className="app">
      <header>
        <nav>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/home"><span>HOME</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/ctx"><span>CTX</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/redux"><span>REDUX</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/rtk"><span>RTK</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/kui"><span>KUI</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/404"><span>404</span></NavLink>
        </nav>
      </header>
      <CentreContextProvider>
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>}>
            <Route path="/home" element={<HomePage/>}/>
          </Route>
          <Route path="/ctx" element={<CentreContextPage/>}/>
          <Route path="/redux" element={<NotFoundPage/>}/>
          <Route path="/rtk" element={<NotFoundPage/>}/>
          <Route path="/kui" element={<NotFoundPage/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
        </Routes>
      </section>    
      </CentreContextProvider>
    </main>
  );
}

export default App;
