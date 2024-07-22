import About from "./components/About"
import AchievmentShowcase from "./components/AchievmentShowcase"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonial from "./components/Testimonial"


const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
        <Navbar />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <AchievmentShowcase />
        <Testimonial />
        <ContactForm />
        <Footer />
    </main>
  )
}

export default App
