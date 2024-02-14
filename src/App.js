import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import Home from './pages/home'; 
import Contact from './pages/contact';

export default function App() {
   return (
      <div>
         <HashRouter>
            <Routes>
               {/* Set Routes of pages */}
               <Route path="/" element={<Home />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </HashRouter>
      </div>
   )
}