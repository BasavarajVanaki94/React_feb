import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/contact";
import About from "./Components/about";
import { Routes , Route } from "react-router-dom"
export default function App() {
  return (
    <div>
    <h1> Hii Kodnest </h1>

    <Navbar />
    <Routes>
         <Route path="/home" element = {<Home />}></Route>
         <Route path="/about" element = {<About />}></Route>
         <Route path="/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  )
} 