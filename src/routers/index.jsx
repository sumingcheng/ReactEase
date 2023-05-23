import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SingletonPattern } from '@/views/SingletonPattern/index.jsx';
import { StrategyPattern } from '@/views/StrategyPattern/index.jsx';

// 注意 V6 写法和 V5 写法的区别
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SingletonPattern />} />
        <Route path="/StrategyPattern" element={<StrategyPattern />} />
      </Routes>
    </Router>
  );
}

export default App;
