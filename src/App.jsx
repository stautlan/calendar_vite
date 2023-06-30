import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalendarSimple from './components/CalendarSimple'
import CalendarStyling from './components/CalendarStyling'
import CalendarNew from './components/CalendarNew'

const args = 'prev';

function App() {
  return (
    <>
      <CalendarSimple prop={args} />
      <div>
        <CalendarStyling />
      </div>
      <div>
        <CalendarNew />
      </div>
    </>
  )
}

export default App