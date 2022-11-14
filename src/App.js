import React from 'react'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import AboutUs from './components/home/AboutUs'
import Banner from './components/home/Banner'
import Work from './components/home/Work'

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Work />
                <AboutUs />
            </main>
            <Footer />
        </>
    )
}

export default App