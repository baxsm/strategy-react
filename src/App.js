import React from 'react'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import AboutUs from './components/home/AboutUs'
import Banner from './components/home/Banner'
import BreadCrumb from './components/home/BreadCrumb'
import ContactUs from './components/home/ContactUs'
import Gallery from './components/home/Gallery'
import Pricing from './components/home/Pricing'
import Team from './components/home/Team'
import Testimonials from './components/home/Testimonials'
import Work from './components/home/Work'

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Work />
                <AboutUs />
                <Team />
                <Testimonials />
                <Pricing />
                <BreadCrumb />
                <Gallery />
                <ContactUs />
            </main>
            <Footer />
        </>
    )
}

export default App