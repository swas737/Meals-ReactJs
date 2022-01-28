import React from 'react'
import Navbar from './components/Navbar'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Body from './components/Body'
import './App.css'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}
