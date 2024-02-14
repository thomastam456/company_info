import { NavLink } from 'react-router-dom';
import {
   site_logo_big
} from '../img/img_import';

export default function Header() {
   return (
      <>
         {/* Header */}
         <nav className="app-header navbar navbar-expand-lg navbar-light bg-white">

            <div className="container">
               {/* Logo */}
               <a className="navbar-band" href="#/"><img src={site_logo_big} alt="Site Logo" /></a>

               {/* Toggle Button for mobile navbar */}
               <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>

               {/* Page Link */}
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <NavLink to="/" className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')}>主頁</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/contact" className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')}>聯絡我們</NavLink>
                     </li>
                  </ul>
               </div>
            </div>

         </nav>
      </>
   )
}