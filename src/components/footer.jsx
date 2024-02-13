import { useEffect, useRef } from 'react';

export default function Footer() {

   // When the user clicks on the button, scroll to the top of the document
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };
   
   const prevScrollY = useRef(0);
   const scrollRef = useRef(null);

   useEffect(() => {

      // Scroll to top after render page
      window.scrollTo(0, 0);

      // Show / Hide Back to Top Button when the user scrolls down 20px from the top of the document
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         if (currentScrollY >= 20 && prevScrollY.current < currentScrollY) {
            scrollRef.current.classList.add('show');
         } else if (currentScrollY < 20) {
            scrollRef.current.classList.remove('show');
         }
         prevScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };

   }, []);

   return (
      <>
         {/* Footer */}
         <footer className="app-footer mt-auto p-3 text-center text-light bg-dark">
            <p className="mb-0">Copyright &#xA9; <span id="copyrightYear">{new Date().getFullYear()}</span> Company Info 公司資訊有限公司 版權所有</p>
         </footer>

         {/* Back to Top Button */}
         <div className="backTop_button" ref={scrollRef} onClick={scrollToTop}><span className="material-icons">arrow_upward</span></div>
      </>
   )
}