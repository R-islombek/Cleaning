
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'
import About from './Component/About/About'
import Main from './Component/Main/Main'
import Section from './Component/Section/Section'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import { useTranslation } from 'react-i18next'
import Modal from './Component/Modal/Modal'



function App() {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
  }

 

  return (
    <>
  
  <div className="top">
  <Modal/>
    <Navbar/>
  </div>
    <Header/>
    <About/>
    <Main/>
    <Section/>
    <Contact/>
    <Footer/>
     
    </>
  )
}

export default App
