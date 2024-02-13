import React, { useEffect, useState, useRef } from 'react';
import ContactCSS from '../styles/contact.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import {
   bannerHome
} from '../img/img_import';

export default function Contact() {

   // Set Input values
   const [values, setValues] = useState({
      usrFname: "",
      usrLname: "",
      usrEmail: "",
      usrMsg: ""
   });

   // Reference - formContent
   const refStepInput = useRef(null);
   const refStepConfirm = useRef(null);

   const el_refStepInput = refStepInput.current;
   const el_refStepConfirm = refStepConfirm.current;

   // Stop form submission & show comfirm page
   const handleSubmit = e => {
      e.preventDefault();

      // Show Confirm Page & Hide Form
      el_refStepInput.classList.add(`${ContactCSS.hide}`);
      el_refStepConfirm.classList.remove(`${ContactCSS.hide}`);
   }

   // Hide Confirm Page & Show Form
   const handleBack = () => {
      el_refStepInput.classList.remove(`${ContactCSS.hide}`);
      el_refStepConfirm.classList.add(`${ContactCSS.hide}`);
   }

   // Set Input values to confirm page
   const handleChange = e => {
      setValues(oldValues => (
         {
            ...oldValues,
            [e.target.name]: e.target.value
         }
      ));
   };

   // Reset Form
   const handleReset = () => {
      setValues(() => (
         {
            usrFname: "",
            usrLname: "",
            usrEmail: "",
            usrMsg: ""
         }
      ));
   };

   // Form Submission
   const formSubmit = () => {
      let contactForm = document.getElementById("contactForm");
      contactForm.submit();
      alert("您輸入的資料已被成功送出。");
   };

   useEffect(() => {

      // Change Site Title
      document.title = "公司資訊網 | 聯絡我們";

   }, []);

   return (
      <>
         <Header />

         {/* Main Content */}
         <div className={`${ContactCSS.bannerArea} darkBgTransparent`} style={{ backgroundImage: `url('${bannerHome}')` }}>
            <h2 className='m-0'>聯絡我們</h2>
         </div>

         <div className="container mainContainer py-4 my-4">

            {/* Contact Form */}
            <div className={ContactCSS.formArea_inner}>

               <div className="row">
                  <div className="col">

                     <form id="contactForm" action="" method="GET" onSubmit={handleSubmit}>
                        <div className={ContactCSS.formContent} ref={refStepInput}>
                           <h3 className="lead mb-2">請在下方表格填寫聯絡資料及訊息以便安排專人回覆您的訊息。</h3>
                           <p><span className="requiredMark note">*</span>必填</p>

                           <div className="row">
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="usrFname">名字<span className="requiredMark">*</span></label>
                                 <input type="text" className="form-control" id="usrFname" name="usrFname" placeholder="Peter" pattern="[A-Z][a-z]+" value={values.usrFname} onChange={handleChange} required />
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="usrLname">姓氏<span className="requiredMark">*</span></label>
                                 <input type="text" className="form-control" id="usrLname" name="usrLname" placeholder="Chan" pattern="[A-Z][a-z]+" value={values.usrLname} onChange={handleChange} required />
                              </div>
                           </div>

                           <div className="mb-3">
                              <label htmlFor="usrEmail">電郵地址<span className="requiredMark">*</span></label>
                              <input type="email" className="form-control" id="usrEmail" name="usrEmail" placeholder="abc@example.com" value={values.usrEmail} onChange={handleChange} required />
                           </div>

                           <div className="mb-3">
                              <label htmlFor="usrMsg">訊息<span className="requiredMark">*</span></label>
                              <textarea className="form-control" id="usrMsg" name="usrMsg" rows="5" cols="30" value={values.usrMsg} onChange={handleChange} required />
                           </div>

                           <div className={ContactCSS.btnArea}>
                              <button type="button" className="btn btn-secondary" onClick={handleReset}>重設</button>
                              <button type="submit" className="btn btn-primary">繼續</button>
                           </div>
                        </div>

                        <div className={`${ContactCSS.formContent} ${ContactCSS.hide}`} ref={refStepConfirm}>
                           <h3 className="lead mb-4">請確認輸入的資料正確:</h3>
                           <table>
                              <tbody>
                                 <tr>
                                    <td>名字</td>
                                    <td>{values.usrFname}</td>
                                 </tr>
                                 <tr>
                                    <td>姓氏</td>
                                    <td>{values.usrLname}</td>
                                 </tr>
                                 <tr>
                                    <td>電郵地址</td>
                                    <td>{values.usrEmail}</td>
                                 </tr>
                                 <tr>
                                    <td>訊息</td>
                                    <td><pre>{values.usrMsg}</pre></td>
                                 </tr>
                              </tbody>
                           </table>
                           <div className={ContactCSS.btnArea}>
                              <button type="button" className="btn btn-secondary" onClick={handleBack}>返回</button>
                              <button type="submit" className="btn btn-primary" onClick={formSubmit}>送出</button>
                           </div>
                        </div>
                     </form>

                  </div>
               </div>

            </div>
         </div>

         <Footer />
      </>
   )
}