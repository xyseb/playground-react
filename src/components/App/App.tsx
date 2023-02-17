import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import CentreContextPage from '../Pages/CentreContextPage/CentreContextPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import RtkStorePage from '../Pages/RtkStorePage/RtkStorePage';
import CentreContextProvider from '../../contexts/CentreContextProvider';

import { rtkStore } from '../../stores/RtkStore'
import { Provider } from 'react-redux'

import ReactQueryPage from '../Pages/ReactQueryPage/ReactQueryPage';

const isDev = (process.env.NODE_ENV === 'development') ? true : false;
const queryClient = new QueryClient({ 
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !isDev
    }
  }
})

function App() {
  
  return (
    <main className="app">
      <header>
        <nav>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/home"><span>HOME</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/ctx"><span>CTX</span></NavLink>
          {/* <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/redux"><span>REDUX</span></NavLink> */}
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/rtk"><span>RTK</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/rq"><span>RQ</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/kui"><span>KUI</span></NavLink>
          {/* <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/404"><span>404</span></NavLink> */}
        </nav>
      </header>
      <QueryClientProvider client={queryClient}>
      <Provider store={rtkStore}>
        <CentreContextProvider>
        <section>
          <Routes>
            <Route path="/" element={<HomePage/>}>
              <Route path="/home" element={<HomePage/>}/>
            </Route>
            <Route path="/ctx" element={<CentreContextPage/>}/>
            {/* <Route path="/redux" element={<NotFoundPage/>}/> */}
            <Route path="/rtk" element={<RtkStorePage/>}/>
            <Route path="/rq" element={<ReactQueryPage/>}/>
            <Route path="/kui" element={<NotFoundPage/>}/>
            {/* <Route path="/404" element={<NotFoundPage/>}/> */}
          </Routes>
        </section>    
        </CentreContextProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={isDev} />
      </QueryClientProvider>
    </main>
  );
}

export default App;
