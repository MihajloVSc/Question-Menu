import { useState } from 'react'
import FAQ from './components/FAQ'
import Accordion from './components/Accordion'

function App() {


  return (
    <div className='w-full h-screen bg-gradient-to-r from-indigo-800 to-green-600'>
      <div className='p-4'>
      <FAQ />
      </div>
    </div>
  )
}

export default App
