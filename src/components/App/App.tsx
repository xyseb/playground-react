import React from 'react';
import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import AccordionPage from '../Pages/AccordionPage/AccordionPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

function App() {
  
  return (
    <main className="App">
      <header>
        <nav>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/home"><span>HOME</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/accordion"><span>ACCORDION</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/404"><span>404</span></NavLink>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>}>
            <Route path="/home" element={<HomePage/>}/>
          </Route>
          <Route path="/accordion" element={<AccordionPage/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
        </Routes>
      </section>    
    </main>
  );
}

export default App;
