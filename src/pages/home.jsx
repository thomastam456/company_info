import React, { useEffect } from 'react';
import HomeCSS from '../styles/home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import {
   bannerHome,
   bannerHome2,
   staff_1,
   staff_2,
   staff_3,
   featurette_1,
   featurette_2
} from '../img/img_import';


export default function Home() {
   useEffect(() => {

      // Change Site Title
      document.title = "公司資訊網";

      // Add Dark Background with transparent to Carousel
      const carouselItem = Array.from( document.querySelectorAll('.carousel-item') );
      carouselItem.forEach(element => {
         element.classList.add("darkBgTransparent");
      });

   }, []);

   return (
      <>
         <Header />

         {/* Carousel */}
         <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
               <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active" style={{ backgroundImage: `url('${bannerHome2}')` }}>
                  <div className="carousel-caption">
                     <h1>公司資訊網4565</h1><br /><br />
                     <h4>一站式公司資訊網站，</h4>
                     <h4>提供市場上最新的資訊。</h4>
                  </div>
               </div>
               <div className="carousel-item" style={{ backgroundImage: `url('${bannerHome}')` }}>
                  <div className="carousel-caption">
                     <h1 className="mb-4">聯絡我們</h1><br />
                     <p><a className="btn btn-primary" href="/company_info/contact">查看更多</a></p>
                  </div>
               </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
            </button>
         </div>

         {/* Main Content */}
         <div className={`container mainContainer ${HomeCSS.marketing} py-4`}>

            {/* Marketing Area */}
            <div className="row my-3">
               <div className={`col-lg-4 ${HomeCSS["col-lg-4"]}`}>
                  <div className={`${HomeCSS.staffImgWrapper} rounded-circle`}><img src={staff_1} alt="staff" /></div>
                  <h2>Staff</h2>
                  <p>Some representative placeholder content for the three columns of text below the carousel.</p>
               </div>
               <div className={`col-lg-4 ${HomeCSS["col-lg-4"]}`}>
                  <div className={`${HomeCSS.staffImgWrapper} rounded-circle`}><img src={staff_2} alt="staff" /></div>
                  <h2>Staff</h2>
                  <p>Another exciting bit of representative placeholder content.</p>
               </div>
               <div className={`col-lg-4 ${HomeCSS["col-lg-4"]}`}>
                  <div className={`${HomeCSS.staffImgWrapper} rounded-circle`}><img src={staff_3} alt="staff" /></div>
                  <h2>Staff</h2>
                  <p>And lastly this, the third column of representative placeholder content.</p>
               </div>
            </div>

            {/* Featurette Area */}
            <div className={`row ${HomeCSS.row} ${HomeCSS.featurette}`}>
               <div className="col-md-7">
                  <h2 className={HomeCSS["featurette-heading"]}>First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                  <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
               </div>
               <div className="col-md-5">
                  <img src={featurette_1} alt="feature" />
               </div>
            </div>
            <div className={`row ${HomeCSS.row} ${HomeCSS.featurette}`}>
               <div className="col-md-7 order-md-2">
                  <h2 className={HomeCSS["featurette-heading"]}>Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                  <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
               </div>
               <div className="col-md-5 order-md-1">
                  <img src={featurette_2} alt="feature" />
               </div>
            </div>

         </div>

         <Footer />
      </>
   )
}
