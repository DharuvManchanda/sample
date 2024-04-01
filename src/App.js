import "./App.css";
import About from "./Components/About";
import Examples from "./Components/Examples";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import logo from './Components/Assets/500by500.gif';
import TopBanner from "./Components/TopBanner";
import Advertisement from "./Components/Advertisement"
import Footer from "./Components/footer";
import Contact from "./Components/Contact";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Form from "./Components/Form";
import { ContactUs } from "./Components/ContactUsForm";
function App() {
  return (
    <>
      <TopBanner></TopBanner>
      <Navbar></Navbar>
        <Advertisement></Advertisement>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Header img={logo} title="Unlock Your Potential Achieve Your Desired IELTS Score with " htitle1="DPD" htitle2="IELTS" htitle3 titletext1="Welcome to DPD IELTS, the premier IELTS preparation center for students around the world. Experience of over 10+ Years in IELTS and PTE. We are recognized as the best IELTS Institute and PTE Institute in the Barnala region. Our experienced and highly qualified team of instructors is dedicated to helping you achieve success on the IELTS exam and reach your academic or professional goals." titletext3="Study Abroad | Practice tests | IELTS prep | Exam Strategy"/>}/>
        <Route path="/about/*" element={<About />} />
        <Route path="/examples/*" element={<Examples />} />
        <Route path="/contact/*" element={<Contact />} />
         </Routes>
    </BrowserRouter>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </>
  );
}export default App;
