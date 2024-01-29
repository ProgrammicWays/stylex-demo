import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/features/Home/Home';
import React from 'react';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
