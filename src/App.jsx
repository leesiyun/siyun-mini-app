import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, TooltipApp, CoachMark, GoogleCalendar } from '@/pages'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tooltip' element={<TooltipApp />} />
        <Route path='/coach-mark' element={<CoachMark />} />
        <Route path='/google-calendar' element={<GoogleCalendar />} />
      </Routes>
    </Router>
  )
}

export default App

//88711461272-qubftaaie4op42uivicr6arafca9acae.apps.googleusercontent.com
