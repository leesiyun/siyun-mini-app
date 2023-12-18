import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import TooltipApp from '@/pages/TooltipApp';

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tooltip' element={<TooltipApp />} />
      </Routes>
    </Router>
  );
};

export default App;
