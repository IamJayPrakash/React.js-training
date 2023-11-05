import React from 'react';
import Login from './Login';
import Error from './Error';
// import Show from './Show';
// import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import { AuthProvider } from './auth';
import { RequireAuth } from './RequireAuth';
const LazyAbout = React.lazy(() => import('./About'));
const LazyShow = React.lazy(() => import('./Show'));
function App() {
  return (
    <AuthProvider>
      {/* <h1>Hello reading lovers</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          {/* <Route path='/home' element={<Show />}></Route> */}

          <Route path='/home' element={<React.Suspense fallback='Loading Read Rave home....'>
            <LazyShow />
          </React.Suspense>}></Route>
          <Route path='/about' element={<React.Suspense fallback='Loading Read Rave....'>
            <LazyAbout />
          </React.Suspense>}></Route>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
