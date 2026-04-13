import React from 'react'
import './App.css'
import bg from "./assets/bg.png"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Jigsaw from './components/Jigsaw'
import Footer from "./components/Footer"

function App() {
    return (
        <div className="app" style={{
            backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <div className='app_overlay'></div>
                <div className='app_content'>
                    <Navbar />
                    <Hero />
                    <Jigsaw />
                    <Footer />
                </div>
            


        </div>)

}

export default App

