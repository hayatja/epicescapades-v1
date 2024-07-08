import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
// import Profile from './components/Profile';
import Community from './components/Community';
import Packages from './components/Packages';
import Login from './components/Login';
import Plan from './components/Plan';
import Profile from './components/Profile';
import Register from './components/Register';
import Destinations from './components/Destinations';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/community' element={<Community />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
