import React, { Suspense } from 'react'
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
const About = React.lazy(() => import('./pages/About/About'))
const Products = React.lazy(() => import('./pages/Products/Products'))
const AIAgents = React.lazy(() => import('./pages/AIAgents/AIAgents'))
const Careers = React.lazy(() => import('./pages/Careers/Careers'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
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
          <Suspense fallback={
            <div className="flex h-screen w-full items-center justify-center bg-white">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-[#4F6BFF]"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/ai-agents" element={<AIAgents />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
