import React from 'react';

import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ReduxStorePage from '../Pages/ReduxStorePage/ReduxStorePage';
import RtkStorePage from '../Pages/RtkStorePage/RtkStorePage';

import reduxStore from '../../stores/redux/ReduxStore'
import { Provider } from 'react-redux'
import AppStateContextProvider from '../../contexts/AppStateContextProvider';


function App() {
  
  return (
    <main className="app">
      <header>
        <nav>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/home"><span>HOME</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/redux"><span>REDUX</span></NavLink>
        </nav>
      </header>
      <AppStateContextProvider>
        <Provider store={reduxStore}>
          <section>
            <Routes>
              <Route path="/" element={<HomePage/>}>
                <Route path="/home" element={<HomePage/>}/>
              </Route>
              <Route path="/redux" element={<ReduxStorePage/>}/>
            </Routes>
          </section>    
        </Provider>
      </AppStateContextProvider>
    </main>
  );
}

export default App;
