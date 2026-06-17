import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import Services from './components/Services/Services'
import Industries from './components/Industries/Industries'
import Process from './components/Process/Process'
import AgileProcess from './components/AgileProcess/AgileProcess'
import Workflow from './components/Workflow/Workflow'
import TrustedBy from './components/TrustedBy/TrustedBy'
import Headquarters from './components/Headquarters/Headquarters'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import AIAgents from './pages/AIAgents/AIAgents'
import Careers from './pages/Careers/Careers'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <TrustedBy />
        <Services />
        <Industries />
        <Process />
        <AgileProcess />
        <Workflow />

      </main>
      <Headquarters />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-[200vh] bg-white relative overflow-hidden flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
