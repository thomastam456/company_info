import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import Home from './pages/home'; 
import Contact from './pages/contact';

export default function App() {
   return (
      <div>
         <BrowserRouter basename="/company_info">
            <Routes>
               {/* Set Routes of pages */}
               <Route index element={<Home />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}