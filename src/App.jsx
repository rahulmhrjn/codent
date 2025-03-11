import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './carousel/Carousel'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="relative">
      <Header />
      
      {/* Wrapper for Navbar to place it over Carousel */}
      <div className="absolute top-14 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Carousel as Background */}
      <Carousel />
      <Footer />
    </div>
  )
}

export default App