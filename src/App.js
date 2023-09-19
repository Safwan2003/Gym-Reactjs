import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Layout from './Layout';
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Pricing from "./Pages/Pricing"
function App() {
  return (
    <div className="bg-[#1d1d1d]">
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="About" element={<About />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
