import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, TooltipApp, CoachMark } from '@/pages';

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tooltip' element={<TooltipApp />} />
        <Route path='/coach-mark' element={<CoachMark />} />
      </Routes>
    </Router>
  );
};

export default App;
