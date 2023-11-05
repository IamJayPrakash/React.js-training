
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact"
import About from "./About"
import Footer from "./Footer";
import Error from "./Error";



function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App
