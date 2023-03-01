import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import CentreContextPage from '../Pages/CentreContextPage/CentreContextPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ReduxStorePage from '../Pages/ReduxStorePage/ReduxStorePage';
import RtkStorePage from '../Pages/RtkStorePage/RtkStorePage';
import CentreContextProvider from '../../contexts/CentreContextProvider';

import AppStateContextProvider from '../../contexts/AppStateContextProvider';


import reduxStore from '../../stores/redux/ReduxStore'
import { rtkStore } from '../../stores/rtk/RtkStore'
import { Provider } from 'react-redux'

import ReactQueryPage from '../Pages/ReactQueryPage/ReactQueryPage';
import { SWRConfig } from 'swr';
import SwrPage from '../Pages/SwrPage/SwrPage';

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
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/rq"><span>RQ</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/swr"><span>SWR</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/redux"><span>REDUX</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/rtk"><span>RTK</span></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/kui"><span>KUI</span></NavLink>
          {/* <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/404"><span>404</span></NavLink> */}
        </nav>
      </header>
      <SWRConfig value={{ provider: () => new Map(), fetcher: (url:string) => fetch(url).then(res => res.json()) }}>
      <QueryClientProvider client={queryClient}>
      <AppStateContextProvider>
      <Provider store={reduxStore}>
      <Provider store={rtkStore}>
        <CentreContextProvider>
        <section>
          <Routes>
            <Route path="/" element={<HomePage/>}>
              <Route path="/home" element={<HomePage/>}/>
            </Route>
            <Route path="/ctx" element={<CentreContextPage/>}/>
            <Route path="/redux" element={<ReduxStorePage/>}/>
            <Route path="/rtk" element={<RtkStorePage/>}/>
            <Route path="/rq" element={<ReactQueryPage/>}/>
            <Route path="/swr" element={<SwrPage/>}/>
            <Route path="/kui" element={<NotFoundPage/>}/>
            {/* <Route path="/404" element={<NotFoundPage/>}/> */}
          </Routes>
        </section>    
        </CentreContextProvider>
      </Provider>
      </Provider>
      </AppStateContextProvider>
      <ReactQueryDevtools initialIsOpen={isDev} />
      </QueryClientProvider>
      </SWRConfig>
    </main>
  );
}

export default App;
