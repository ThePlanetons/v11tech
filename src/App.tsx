import './App.css'
// import { motion } from "framer-motion";

// function App() {

//   return (
//     <>
//       {/* <!-- Start Header section --> */}
//       <header className="cs_site_header cs_style_1 cs_text_white cs_sticky_header cs_medium cs_sticky_active">
//         <div className="cs_main_header">
//           <div className="container">
//             <div className="cs_main_header_in">
//               <div className="cs_main_header_left">
//                 <a className="cs_site_branding" href="https://v11tech.com/">
//                   {/* <img src="https://v11tech.com/assets/img/Logo_Last.png" alt="Logo"> */}
//                 </a>
//               </div>
//               <div className="cs_main_header_center">
//                 <nav className="cs_nav cs_medium cs_primary_font">
//                   <ul className="cs_nav_list cs_onepage_nav">
//                     <li className="dropdown">
//                       <a href="javascript:void(0);" className="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         Products <span className="caret"></span>
//                       </a>
//                       {/* <ul className="dropdown-menu">
//                         <li className="nav-sub-menu">
//                           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="pixfort-icon pix-mr-10 pix-menu-item-icon" width="24" height="24" data-name="Line/pixfort-icon-pos-terminal-3" viewBox="2 2 20 20"><path fill="none" stroke="#6C757D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M6.63960781,3 L17.3603922,3 C18.3137542,3 19.1345839,3.67291934 19.3215535,4.60776773 L20.5215535,10.6077677 C20.7381774,11.6908872 20.035744,12.7445375 18.9526245,12.9611614 C18.8234781,12.9869906 18.6920962,13 18.5603922,13 L5.43960781,13 C4.33503831,13 3.43960781,12.1045695 3.43960781,11 C3.43960781,10.868296 3.45261718,10.7369141 3.47844645,10.6077677 L4.67844645,4.60776773 C4.86541613,3.67291934 5.68624577,3 6.63960781,3 Z M5,17 L19,17 C20.1045695,17 21,17.8954305 21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 C3,17.8954305 3.8954305,17 5,17 Z M9,13 L9,15.1715729 C9,15.7020059 8.78928632,16.2107137 8.41421356,16.5857864 L8,17 L8,17 L16,17 L15.5857864,16.5857864 C15.2107137,16.2107137 15,15.7020059 15,15.1715729 L15,13 L15,13"></path></svg>
//                           <a href="https://v11tech.com/products/qr-ordering">V11-QR</a>
//                         </li>
//                         <li className="nav-sub-menu">
//                           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="pixfort-icon pix-mr-10 pix-menu-item-icon" width="24" height="24" data-name="Line/pixfort-icon-mobile-phone-vertical-1" viewBox="2 2 20 20"><path fill="none" stroke="#6C757D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M9,3 L15,3 C16.1045695,3 17,3.8954305 17,5 L17,19 C17,20.1045695 16.1045695,21 15,21 L9,21 C7.8954305,21 7,20.1045695 7,19 L7,5 C7,3.8954305 7.8954305,3 9,3 Z M10,3 L10,4 L14,4 L14,3"></path></svg>
//                           <a href="https://v11tech.com/products/kds">V11-KDS</a>
//                         </li>
//                         <li className="nav-sub-menu">
//                           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="pixfort-icon pix-mr-10 pix-menu-item-icon" width="24" height="24" data-name="Line/pixfort-icon-rectangle-vertical-1" viewBox="2 2 20 20"><path fill="none" stroke="#6C757D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M7.5,3 L16.5,3 C17.3284271,3 18,3.67157288 18,4.5 L18,19.5 C18,20.3284271 17.3284271,21 16.5,21 L7.5,21 C6.67157288,21 6,20.3284271 6,19.5 L6,4.5 C6,3.67157288 6.67157288,3 7.5,3 Z"></path></svg>
//                           <a href="https://v11tech.com/products/kiosk" title="V11-Kiosk">V11-Kiosk</a>
//                         </li>
//                         <li className="nav-sub-menu">
//                           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="pixfort-icon pix-mr-10 pix-menu-item-icon" width="24" height="24" data-name="Line/pixfort-icon-money-dollar-2" viewBox="2 2 20 20"><path fill="none" stroke="#6C757D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M5,8 L19,8 C20.1045695,8 21,8.8954305 21,10 L21,18 C21,19.1045695 20.1045695,20 19,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,10 C3,8.8954305 3.8954305,8 5,8 Z M10.5880781,15.6694453 C10.7961391,16.0816627 11.3497506,16.3333333 12,16.3333333 C12.8284271,16.3333333 13.5,15.9342894 13.5,15.2962963 C13.5,14.8709675 13,14.4388688 12,14 M13.4169271,12.339625 C13.2128549,11.9208261 12.6555352,11.6666667 12,11.6666667 C11.1715729,11.6666667 10.5,12.061449 10.5,12.7037037 C10.5,13.1318735 11,13.5639723 12,14 M12,16.3333333 L12,17 M12,11.6666667 L12,11 M17,17 L18,17 M7,11 L6,11 M5,8 L5,5.5 C5,4.67157288 5.67157288,4 6.5,4 L17.5,4 C18.3284271,4 19,4.67157288 19,5.5 L19,8 L19,8"></path></svg>
//                           <a href="javascript:void(0);" title="Comming Soon!">V11-Conect</a>
//                         </li>
//                         <li className="nav-sub-menu">
//                           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="pixfort-icon pix-mr-10 pix-menu-item-icon" width="24" height="24" data-name="Line/pixfort-icon-user-circle-star-1" viewBox="2 2 20 20"><path fill="none" stroke="#6C757D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M20.9435309,13.0138362 C20.9808394,12.6810411 21,12.3427582 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.806848 6.76837452,20.733545 11.5120291,20.9869965 M5.63686238,18.367264 C6.7436883,17.1947611 8.19895779,16.4578126 10.0026708,16.1564185 M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z M17,19.7188471 L14.527864,21 L15,18.2864745 L13,16.3647451 L15.763932,15.9688471 L17,13.5 L18.236068,15.9688471 L21,16.3647451 L19,18.2864745 L19.472136,21 L17,19.7188471 Z"></path></svg>
//                           <a href="javascript:void(0);" title="Comming Soon!">V11-Queueing System</a>
//                         </li>
//                         <li className="nav-sub-menu">
//                           <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="pixfort-icon pix-mr-10 pix-menu-item-icon" width="24" height="24" data-name="Line/pixfort-icon-git-new-branch-1" viewBox="2 2 20 20"><path fill="none" stroke="#6C757D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M7,21 C8.38071187,21 9.5,19.8807119 9.5,18.5 C9.5,17.1192881 8.38071187,16 7,16 C5.61928813,16 4.5,17.1192881 4.5,18.5 C4.5,19.8807119 5.61928813,21 7,21 Z M17,8 C18.3807119,8 19.5,6.88071187 19.5,5.5 C19.5,4.11928813 18.3807119,3 17,3 C15.6192881,3 14.5,4.11928813 14.5,5.5 C14.5,6.88071187 15.6192881,8 17,8 Z M7,8 C8.38071187,8 9.5,6.88071187 9.5,5.5 C9.5,4.11928813 8.38071187,3 7,3 C5.61928813,3 4.5,4.11928813 4.5,5.5 C4.5,6.88071187 5.61928813,8 7,8 Z M7,8 L7,16 M7,12 L15,12 C16.1045695,12 17,11.1045695 17,10 L17,8 L17,8"></path></svg>
//                           <a href="javascript:void(0);" title="Comming Soon!">V11-Ticket System</a>
//                         </li>
//                       </ul> */}
//                     </li>
//                     <li>
//                       <a className="" href="https://v11tech.com/about-us">About Us</a></li>
//                     <li><a className="" href="https://v11tech.com/services">Services</a></li>
//                     <li><a className="" href="https://v11tech.com/customers">Customers</a></li>
//                     <li><a className="" href="https://v11tech.com/contact">Contact Us</a></li>
//                   </ul>
//                   <span className="cs_menu_toggle"><span></span></span></nav>
//               </div>
//               <div className="cs_main_header_right">
//                 <div className="cs_header_btns">
//                   <a href="/book-a-demo" className="cs_header_text_btn cs_modal_btn cs_btn cs_style_1" data-modal="login">Book a Demo</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="cs_content">
//         {/* <!-- Start Hero section --> */}
//         <section className="cs_hero cs_style_1 position-relative" id="home">
//           <div className="container">
//             <div className="cs_hero_text text-center">
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeInUp;" */}
//               <h1 className="cs_hero_title cs_text_white wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
//                 Innovative Mobile Ordering System through QR Code.
//               </h1>
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.25s; animation-name: fadeIn;" */}
//               <p className="cs_hero_subtitle wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.25s">
//                 We build platform for small business Owners, Housewifes, Students to run business  <br />with cost-effective subscription model to boost your overall revenue.
//               </p>
//             </div>
//             {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.25s; animation-name: fadeIn;" */}
//             <div className="cs_hero_img wow product_hero fadeIn" data-wow-duration="0.8s" data-wow-delay="0.25s" >
//               {/* <img src="https://v11tech.com/assets/img/Product1.png" alt="Thumbnail" className="img-border-rd"> */}
//             </div>
//           </div>
//           <div className="cs_hero_shape1"></div>
//           <div className="cs_hero_shape2">
//             {/* <img src="https://v11tech.com/assets/img/Polygon.svg" alt="Polygon Icon"> */}
//           </div>
//           <div className="cs_hero_shape3"></div>
//         </section>

//         <section className="order-process mt-5" data-aos="zoom-in">
//           <div className="container">
//             <div className="row justify-content-sm-around">
//               <div className="col-md-3 order-det mb-5">
//                 <h6 className="or-head mb-4">Restaurants &amp; Tea Shops</h6>
//                 <div className="or-part">
//                   <div className="p-2">
//                     {/* <img src="https://v11tech.com/assets\img\retails.webp" className="img-fluid mb-or img-border-rd" alt="Restaurants &amp; Tea Shops"> */}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3 order-det mb-5">
//                 <h6 className="or-head mb-4">
//                   Grocery Shop
//                 </h6>
//                 <div className="or-part">
//                   <div className="p-2">
//                     {/* <img src="https://v11tech.com/assets\img\food_img.webp" className="img-fluid mb-or img-border-rd" alt="Grocery Shop"> */}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3 order-det mb-5">
//                 <h6 className="or-head mb-4">
//                   Clothing &amp; Fashions Shop
//                 </h6>
//                 <div className="or-part">
//                   <div className="p-2">
//                     {/* <img src="https://v11tech.com/assets\img\warehouse.webp" className="img-fluid mb-or img-border-rd" alt="Clothing &amp; Fashions Shop"> */}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 order-det mb-5">
//                 <h6 className="or-head mb-4">
//                   Stationary Shop
//                 </h6>
//                 <div className="or-part">
//                   <div className="p-2">
//                     {/* <img src="https://v11tech.com/assets\img\manufac_img.webp" className="img-fluid mb-or img-border-rd" alt="Stationary Shop"> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* <!-- Users features --> */}
//         <section className="cs_user_feature py-5">
//           <div className="container">
//             <div className="row align-items-center cs_gap_y_40 cs_reverse_lg">
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeIn;" */}
//               <div className="col-xl-6 wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">
//                 <div className="mb-4 cs_section_heading cs_style_1">
//                   <p className="cs_section_subtitle cs_text_accent">Our QR Code System reached everywhere</p>
//                   <h2 className="cs_section_title mb-0 line-clamp-2">Our Software platform used by Wide Range people and Industries</h2>
//                 </div>
//                 <ul className="cs_list cs_style_1 cs_mp0">
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">Automatic Orders</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">Save Manpower Cost</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">24/7 Order Processing</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">No need Website</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">Automatic Printer</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">100% reliable orders</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">Avoid fake enquiry</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">Don't Check WhatsApp</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">100% business growth</span>
//                   </li>
//                   <li>
//                     <span className="cs_list_icon">
//                       {/* <img src="https://v11tech.com/assets/img/arrow.svg" alt="Icon"> */}
//                     </span>
//                     <span className="cs_list_text">Easy to Promote via QR</span>
//                   </li>
//                 </ul>
//                 {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.25s; animation-name: fadeIn;" */}
//                 <div className="cs_btn_group text-center wow fadeIn mt-3" data-wow-duration="0.8s" data-wow-delay="0.25s">

//                   {/* onclick="Calendly.initPopupWidget({url: 'https://calendly.com/saravanan-gunasekaran/30min'});return false;" */}
//                   <a className="cs_btn cs_style_1" href="javascript:void(0);" >Talk to Us</a>
//                 </div>
//               </div>
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeInRight;" */}
//               <div className="col-xl-6 wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.2s">
//                 <div className="cs_feature_thumb_1">
//                   {/* <img src="https://v11tech.com/assets/img/QR_Order.png" alt="QR order code" className="img-border-rd"> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* <!-- End Featured section --> */}

//         <section>
//           <div id="el-1dd767d" className="pix-highlighted-element text-center ">
//             <h2 className="pix-highlighted-items">
//               <span id="el-1dd767d-0" className="pix-highlight-bg pix-waiting pix-animate animated">
//                 <span className="pix-highlighted-text pix-highlight-item font-weight-normal font-weight-bold heading-font ">V11 QR</span></span>
//               <span id="el-1dd767d-1" className=" elementor-repeater-item-a96514a"><span className="pix-highlighted-text  pix-highlight-item font-weight-normal  heading-font ">
//                 is perfect for</span>
//               </span>
//             </h2>
//           </div>

//           <div className="container text-centers" id="perfect-for">
//             <div className="row align-items-start">
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/Bars.png" alt="Bar"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Bar</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/QSR.png" alt="Quick Service Restaurants (QSR)"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Quick Service Restaurants (QSR)</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/HotelsResorts.png" alt="Hotels &amp; Resorts"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Hotels &amp; Resorts</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/BakeryShops.png" alt="Bakery Shops"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Bakery Shops</h6></div>
//                 </div>
//               </div>
//             </div>

//             <div className="row align-items-start">
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/Chains.png" alt="Chains"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Chains</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/FSR.png" alt="Full Service Restaurants"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Full Service Restaurants</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/CloudKitchens.png" alt="Cloud kitchens"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Cloud kitchens</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/FoodCourts.png" alt="Food Courts"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Food Courts</h6></div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- row --> */}
//             <div className="row align-items-start">
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/Canteens.png" alt="Canteens"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Canteens</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/AIBuffet.png" alt="All-you-can-eat Restaurants"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">All-you-can-eat Restaurants</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/FoodRetail.png" alt="Food Retail"> */}
//                   </div>
//                   <div className="perf-text  ps-3"><h6 className="font-weight-bold">Food Retail</h6></div>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-2 perfects">
//                 <div className="-text d-flex justify-content-center align-items-center p-3">
//                   <div className="perf-img">
//                     {/* <img src="https://v11tech.com/assets/img/pos/PopUpStores.png" alt="Pop-up Stores"> */}
//                   </div>
//                   <div className="perf-text ps-3"><h6 className="font-weight-bold">Pop-up Stores</h6></div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- row --> */}
//           </div>
//         </section>

//         {/* <!-- Start Pricing section --> */}
//         <section id="pricing" className="py-5 cs_section_shape_wrap_1 cs_gradient_bg_1 position-relative overflow-hidden">
//           <div className="cs_section_shape_1 position-absolute">
//             {/* <img src="https://v11tech.com/assets/img/Vector3.svg" alt="Shape"> */}
//           </div>
//           <div className="cs_section_shape_2 position-absolute">
//             {/* <img src="https://v11tech.com/assets/img/dot.svg" alt="Shape"> */}
//           </div>
//           <div className="container">
//             <div className="mb-4 cs_section_heading cs_style_1 cs_style_1 text-center">
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeInUp;" */}
//               <p className="cs_section_subtitle cs_text_accent wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Our Pricing</p>
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeIn;" */}
//               <h2 className="cs_section_title mb-0 wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s" >Transparent Pricing Plans, Find the <br /> Perfect Fit for Your Needs</h2>
//             </div>
//             {/* <!-- Plan subscription --> */}
//             {/* <!-- Switch toggle --> */}
//             <section>
//               <div className="rt-container">
//                 <div className="col-rt-12">
//                   <div className="Scriptcontent">
//                     <div className="toggleContainer">
//                       {/* <label className="toggleSwitch nolabel" onclick="">
//                         <input type="checkbox" data-toggle="toggle" id="plan-subscribe">
//                           <a></a>
//                           <span>
//                             <span className="left-span">Monthly</span>
//                             <span className="right-span">Yearly</span>
//                           </span>
//                       </label> */}
//                       <div id="console-event"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             {/* <!-- End Switch toggle --> */}

//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="cs_section_title mb-0"
//             >
//               Transparent Pricing Plans, Find the <br /> Perfect Fit for Your Needs
//             </motion.h2>

//             {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeIn;" */}
//             <div className="flex flex-row justify-center cs_gap_y_30 wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s" >
//               <div className="cs_pricing_table cs_style_1 mx-3">
//                 <div className="cs_pricing_head">
//                   <div className="cs_pricing_icon">
//                     {/* <img src="https://v11tech.com/assets/img/symbol.svg" alt="symbol"> */}
//                   </div>
//                   <div className="cs_pricing_head_text">
//                     <h3 className="cs_pricing_head_title">
//                       Starter                  </h3>
//                     <p className="cs_pricing_head_subtitle mb-0">For small business</p>
//                   </div>
//                 </div>
//                 <div className="cs_pricing_seperator"></div>
//                 <div className="cs_pricing_plan">
//                   <h3 className="cs_price_value my-plan" data-y="15569.77" data-m="1297.48">INR                    <span className="show-price">1297.48</span>
//                     <small className="subscription-time">/ month</small>
//                   </h3>
//                 </div>
//                 <div className="cs_pricing_feature">
//                   <ul className="cs_pricing_feature_list cs_mp0">
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Only for one user
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Inventory management
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Sells report &amp; anlysis
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-xmark"></i>
//                       Marketting support
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-xmark"></i>
//                       Daily Profit Report
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-xmark"></i>
//                       Free 24/7 support
//                     </li>
//                   </ul>
//                   <a href="https://v11tech.com/book-a-demo" className="cs_pricing_btn cs_up_3_hover">Buy</a>
//                 </div>
//               </div>

//               <div className="cs_pricing_table cs_style_1 mx-3 active">
//                 <div className="cs_pricing_head">
//                   <div className="cs_pricing_icon">
//                     {/* <img src="https://v11tech.com/assets/img/symbol1.svg" alt="symbol1"> */}
//                   </div>
//                   <div className="cs_pricing_head_text">
//                     <h3 className="cs_pricing_head_title">
//                       Basic                  </h3>
//                     <p className="cs_pricing_head_subtitle mb-0">For professionals</p>
//                   </div>
//                 </div>

//                 <div className="cs_pricing_seperator"></div>

//                 <div className="cs_pricing_plan">
//                   <h3 className="cs_price_value my-plan" data-y="25949.61" data-m="2162.47">INR                    <span className="show-price">2162.47</span>
//                     <small className="subscription-time">/ month</small>
//                   </h3>
//                 </div>

//                 <div className="cs_pricing_feature">
//                   <ul className="cs_pricing_feature_list cs_mp0">
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Two user
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Inventory management
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Sells report &amp; anlysis
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Marketting Support
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-check"></i>
//                       Daily Profit Report
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-xmark"></i>
//                       Free 24/7 support
//                     </li>
//                   </ul>

//                   <a href="https://v11tech.com/book-a-demo" className="cs_pricing_btn cs_up_3_hover">Buy</a>
//                 </div>

//                 <div className="cs_pricing_badge">Most Popular</div>
//               </div>

//               <div className="cs_pricing_table cs_style_1 mx-3">
//                 <div className="cs_pricing_head">
//                   <div className="cs_pricing_icon">
//                     {/* <img src="https://v11tech.com/assets/img/symbol3.svg" alt="symbol3"> */}
//                   </div>
//                   <div className="cs_pricing_head_text">
//                     <h3 className="cs_pricing_head_title">
//                       Pro                  </h3>
//                     <p className="cs_pricing_head_subtitle mb-0">For enterprise level</p>
//                   </div>
//                 </div>
//                 <div className="cs_pricing_seperator"></div>
//                 <div className="cs_pricing_plan">
//                   <h3 className="cs_price_value my-plan" data-y="36329.45" data-m="3027.45">INR                    <span className="show-price">3027.45</span>
//                     <small className="subscription-time">/ month</small>
//                   </h3>
//                 </div>
//                 <div className="cs_pricing_feature">

//                   <motion.h2
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="cs_section_title mb-0"
//                   >
//                     <ul className="cs_pricing_feature_list cs_mp0">
//                       <li>
//                         <i className="fa-solid fa-check"></i>
//                         1 to 3 user
//                       </li>
//                       <li>
//                         <i className="fa-solid fa-check"></i>
//                         Inventory management
//                       </li>
//                       <li>
//                         <i className="fa-solid fa-check"></i>
//                         Sells report &amp; anlysis
//                       </li>
//                       <li>
//                         <i className="fa-solid fa-check"></i>
//                         Marketting Support
//                       </li>
//                       <li>
//                         <i className="fa-solid fa-check"></i>
//                         Daily Profit Report
//                       </li>
//                       <li>
//                         <i className="fa-solid fa-check"></i>
//                         Free 24/7 support
//                       </li>
//                     </ul>
//                   </motion.h2>

//                   <a href="https://v11tech.com/book-a-demo" className="cs_pricing_btn cs_up_3_hover">Buy</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* <!-- End Pricing section --> */}

//         <section id="testimonial" className="pt-5">
//           <div className="container pb-5">
//             <div className="cs_section_heading cs_style_1 text-center">
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeInUp;" */}
//               <p className="cs_section_subtitle cs_text_accent wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" >Clients Feedback</p>
//               {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeIn;" */}
//               <h2 className="cs_section_title mb-0 wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">Voices of Delights Testimonials That <br /> Speak to Our Excellence</h2>
//             </div>
//           </div>
//           {/* style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeIn;" */}
//           {/* style="opacity: 1; width: 6208px; transform: translate3d(-2328px, 0px, 0px);" */}
//           <div className="slick-slider wow fadeIn pb-5 slick-initialized slick-dotted" data-wow-duration="0.8s" data-wow-delay="0.2s" ><div className="slick-list draggable"><div className="slick-track" ><div className="slick-slide slick-cloned w-[358px]" data-slick-index="-4" id="" aria-hidden="true"><div>
//             <div className="cs_testimonial cs_style_1 w-full inline-block">
//               <div className="cs_client_info">
//                 <div className="cs_client_img">
//                   {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                 </div>
//                 <div className="cs_client_meta">
//                   <h4 className="cs_client_name">Tonima Mozeja</h4>
//                   <p className="mb-0">Almas Market</p>
//                 </div>
//               </div>
//               <p className="line-clamp-3 cs_client_review text-justify">
//                 I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                 way
//                 businesses
//                 operate. They have set a new standard in the industry. Highly recommended!
//               </p>
//               <div className="cs_rating" data-rating="4">
//                 <div className="cs_rating_percentage w-[80px]"></div>
//               </div>
//             </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="-3" id="" aria-hidden="true"><div>
//               <div className="cs_testimonial cs_style_1 w-full inline-block">
//                 <div className="cs_client_info">
//                   <div className="cs_client_img">
//                     {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                   </div>
//                   <div className="cs_client_meta">
//                     <h4 className="cs_client_name">Tonima Mozeja</h4>
//                     <p className="mb-0">Almas Market</p>
//                   </div>
//                 </div>
//                 <p className="line-clamp-3 cs_client_review text-justify">
//                   I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                   way
//                   businesses
//                   operate. They have set a new standard in the industry. Highly recommended!
//                 </p>
//                 <div className="cs_rating" data-rating="4">
//                   <div className="cs_rating_percentage"></div>
//                 </div>
//               </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="-2" id="" aria-hidden="true" ><div>
//                 <div className="cs_testimonial cs_style_1 w-full inline-block" >
//                   <div className="cs_client_info">
//                     <div className="cs_client_img">
//                       {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                     </div>
//                     <div className="cs_client_meta">
//                       <h4 className="cs_client_name">Tonima Mozeja</h4>
//                       <p className="mb-0">Almas Market</p>
//                     </div>
//                   </div>
//                   <p className="line-clamp-3 cs_client_review text-justify">
//                     I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                     way
//                     businesses
//                     operate. They have set a new standard in the industry. Highly recommended!
//                   </p>
//                   <div className="cs_rating" data-rating="4">
//                     <div className="cs_rating_percentage w-[80%]"></div>
//                   </div>
//                 </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="-1" id="" aria-hidden="true" ><div>
//                   <div className="cs_testimonial cs_style_1 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Tonima Mozeja</h4>
//                         <p className="mb-0">Almas Market</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="4">
//                       <div className="cs_rating_percentage w-[80%]"></div>
//                     </div>
//                   </div></div></div><div className="slick-slide w-[358px]" data-slick-index="0" aria-hidden="true" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00"><div>
//                     <div className="cs_testimonial cs_style_1 w-full inline-block">
//                       <div className="cs_client_info">
//                         <div className="cs_client_img">
//                           {/* <img src="https://v11tech.com/assets/img/profile-1.jpg" alt="avatar1"> */}
//                         </div>
//                         <div className="cs_client_meta">
//                           <h4 className="cs_client_name">Wizard Bona</h4>
//                           <p className="mb-0">Voila Caffe</p>
//                         </div>
//                       </div>
//                       <p className="line-clamp-3 cs_client_review text-justify">
//                         I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                         way
//                         businesses
//                         operate. They have set a new standard in the industry. Highly recommended!
//                       </p>
//                       <div className="cs_rating" data-rating="5">
//                         <div className="cs_rating_percentage w-full"></div>
//                       </div>
//                     </div></div></div><div className="slick-slide w-[358px]" data-slick-index="1" aria-hidden="true" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" ><div>
//                       <div className="cs_testimonial cs_style_1 pb-5 w-full inline-block" >
//                         <div className="cs_client_info">
//                           <div className="cs_client_img">
//                             {/* <img src="https://v11tech.com/assets/img/profile-2.jpg" alt="avatar1"> */}
//                           </div>
//                           <div className="cs_client_meta">
//                             <h4 className="cs_client_name">Ansari Patron</h4>
//                             <p className="mb-0">Green Lodge</p>
//                           </div>
//                         </div>
//                         <p className="line-clamp-3 cs_client_review text-justify">
//                           I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                           way
//                           businesses
//                           operate. They have set a new standard in the industry. Highly recommended!
//                         </p>
//                         <div className="cs_rating" data-rating="4.5">
//                           <div className="cs_rating_percentage w-[90%]"></div>
//                         </div>
//                       </div></div></div><div className="slick-slide slick-current slick-active w-[358px]" data-slick-index="2" aria-hidden="false" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02"><div>
//                         <div className="cs_testimonial cs_style_1 w-full inline-block">
//                           <div className="cs_client_info">
//                             <div className="cs_client_img">
//                               {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                             </div>
//                             <div className="cs_client_meta">
//                               <h4 className="cs_client_name">Tonima Mozeja</h4>
//                               <p className="mb-0">Almas Market</p>
//                             </div>
//                           </div>
//                           <p className="line-clamp-3 cs_client_review text-justify">
//                             I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                             way
//                             businesses
//                             operate. They have set a new standard in the industry. Highly recommended!
//                           </p>
//                           <div className="cs_rating" data-rating="4">
//                             <div className="cs_rating_percentage w-[80%]"></div>
//                           </div>
//                         </div></div></div><div className="slick-slide slick-active w-[358px]" data-slick-index="3" aria-hidden="false" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03" ><div>
//                           <div className="cs_testimonial cs_style_1 w-full inline-block">
//                             <div className="cs_client_info">
//                               <div className="cs_client_img">
//                                 {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                               </div>
//                               <div className="cs_client_meta">
//                                 <h4 className="cs_client_name">Tonima Mozeja</h4>
//                                 <p className="mb-0">Almas Market</p>
//                               </div>
//                             </div>
//                             <p className="line-clamp-3 cs_client_review text-justify">
//                               I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                               way
//                               businesses
//                               operate. They have set a new standard in the industry. Highly recommended!
//                             </p>
//                             <div className="cs_rating" data-rating="4">
//                               <div className="cs_rating_percentage w-[80%]"></div>
//                             </div>
//                           </div>
//                         </div>
//             </div>
//             <div className="slick-slide slick-active w-[358px]" data-slick-index="4" aria-hidden="false" role="tabpanel" id="slick-slide04" aria-describedby="slick-slide-control04"><div>
//               <div className="cs_testimonial cs_style_1 w-full inline-block">
//                 <div className="cs_client_info">
//                   <div className="cs_client_img">
//                     {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                   </div>
//                   <div className="cs_client_meta">
//                     <h4 className="cs_client_name">Tonima Mozeja</h4>
//                     <p className="mb-0">Almas Market</p>
//                   </div>
//                 </div>
//                 <p className="line-clamp-3 cs_client_review text-justify">
//                   I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                   way
//                   businesses
//                   operate. They have set a new standard in the industry. Highly recommended!
//                 </p>
//                 <div className="cs_rating" data-rating="4">
//                   <div className="cs_rating_percentage w-[80%]"></div>
//                 </div>
//               </div>
//             </div>
//             </div>

//             <div className="slick-slide slick-active w-[358px]" data-slick-index="5" aria-hidden="false" role="tabpanel" id="slick-slide05" aria-describedby="slick-slide-control05">
//               <div>
//                 <div className="cs_testimonial cs_style_1 w-full inline-block" >
//                   <div className="cs_client_info">
//                     <div className="cs_client_img">
//                       {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                     </div>
//                     <div className="cs_client_meta">
//                       <h4 className="cs_client_name">Tonima Mozeja</h4>
//                       <p className="mb-0">Almas Market</p>
//                     </div>
//                   </div>
//                   <p className="line-clamp-3 cs_client_review text-justify">
//                     I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                     way
//                     businesses
//                     operate. They have set a new standard in the industry. Highly recommended!
//                   </p>
//                   <div className="cs_rating" data-rating="4">
//                     <div className="cs_rating_percentage w-[80%]"></div>
//                   </div>
//                 </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="6" id="" aria-hidden="true"><div>
//                   <div className="cs_testimonial cs_style_1 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-1.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Wizard Bona</h4>
//                         <p className="mb-0">Voila Caffe</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="5">
//                       <div className="cs_rating_percentage w-full"></div>
//                     </div>
//                   </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="7" id="" aria-hidden="true"><div><div className="cs_testimonial cs_style_1 pb-5 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-2.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Ansari Patron</h4>
//                         <p className="mb-0">Green Lodge</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="4.5">
//                       <div className="cs_rating_percentage w-[90%]"></div>
//                     </div>
//                   </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="8" id="" aria-hidden="true" ><div><div className="cs_testimonial cs_style_1 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Tonima Mozeja</h4>
//                         <p className="mb-0">Almas Market</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="4">
//                       <div className="cs_rating_percentage w-[80%]"></div>
//                     </div>
//                   </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="9" id="" aria-hidden="true"><div><div className="cs_testimonial cs_style_1 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Tonima Mozeja</h4>
//                         <p className="mb-0">Almas Market</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="4">
//                       <div className="cs_rating_percentage w-[80%]"></div>
//                     </div>
//                   </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="10" id="" aria-hidden="true"><div><div className="cs_testimonial cs_style_1 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Tonima Mozeja</h4>
//                         <p className="mb-0">Almas Market</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="4">
//                       <div className="cs_rating_percentage w-[80%]"></div>
//                     </div>
//                   </div></div></div><div className="slick-slide slick-cloned w-[358px]" data-slick-index="11" id="" aria-hidden="true"><div><div className="cs_testimonial cs_style_1 w-full inline-block">
//                     <div className="cs_client_info">
//                       <div className="cs_client_img">
//                         {/* <img src="https://v11tech.com/assets/img/profile-3.jpg" alt="avatar1"> */}
//                       </div>
//                       <div className="cs_client_meta">
//                         <h4 className="cs_client_name">Tonima Mozeja</h4>
//                         <p className="mb-0">Almas Market</p>
//                       </div>
//                     </div>
//                     <p className="line-clamp-3 cs_client_review text-justify">
//                       I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the
//                       way
//                       businesses
//                       operate. They have set a new standard in the industry. Highly recommended!
//                     </p>
//                     <div className="cs_rating" data-rating="4">
//                       <div className="cs_rating_percentage w-[80%]"></div>
//                     </div>
//                   </div>
//                   </div>
//             </div>
//           </div>
//           </div>
//             <ul className="slick-dots" role="tablist">
//               <li className="" role="presentation">
//                 <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2">1</button>
//               </li>
//               <li role="presentation" className="">
//                 <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" >2</button></li><li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 2" aria-selected="true">3</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 2" >4</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 2">5</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control05" aria-controls="slick-slide05" aria-label="6 of 2" >6</button></li></ul>
//           </div>

//           <div className="overflow-hidden mt-5">
//             <div className="container mb-5">
//               <div className="cs_section_heading cs_style_2 text-center">
//                 {/* style="visibility: hidden; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: none;" */}
//                 <h2 className="cs_section_subtitle mb-0 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s" >
//                   Our worldwide reputed customers
//                 </h2>
//               </div>

//               <div className="cs_height_45 cs_height_lg_45"></div>

//               <div className="world_map d-flex justify-content-center align-items-center">
//                 <div className="col-md-8 mx-auto">
//                   <div className="partners">
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/Bhavika_LogoF.png" alt="Bhavika_LogoF.png"> */}
//                     </div>
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/Dessert_Boss'z.png" alt="Dessert_Boss'z.png"> */}
//                     </div>
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/IBS.png" alt="IBS.png"> */}
//                     </div>
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/Kurunji Metro.png" alt="Kurunji Metro.png"> */}
//                     </div>
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/LOGO_Karaikudi.png" alt="LOGO_Karaikudi.png"> */}
//                     </div>
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/Together_Restaurant - Copy.png" alt="Together_Restaurant - Copy.png"> */}
//                     </div>
//                     <div className="partner_logo">
//                       {/* <img src="https://v11tech.com/assets/img/clients/thalappakatti.gif" alt="thalappakatti.gif"> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- End Brands section --> */}

//           {/* <!-- Start CTA section --> */}
//           <section className="mb-5">
//             <div className="container">
//               <div className="cs_cta cs_style_1 text-center position-relative px-3 pb-4 pt-3">
//                 <div className="cs_cta_in col-md-10 mx-auto">
//                   <div className="cs_section_heading cs_style_1 mb-3">
//                     <h2 className="cs_section_title cs_text_white">
//                       Upgrade Your Business with Our Cutting-Edge <span className="product_cta">V11-QR</span> Solutions!
//                     </h2>

//                     <p className="cs_section_subtitle mb-0 justify center-align">
//                       Experience the future of transactions! Schedule a demo today and
//                       witness how our <span className="cta-product">V11-QR </span> solution can revolutionize your business.
//                     </p>
//                   </div>

//                   <div className="cs_btn_group text-center mb-1">
//                     <a href="https://v11tech.com/book-a-demo" className="cs_btn cs_style_1">Start Free Trial</a>
//                   </div>
//                 </div>

//                 <div className="cs_cta_shape1">
//                   {/* <img src="https://v11tech.com/assets/img/Ellipse_small.svg" alt="Icon"> */}
//                 </div>

//                 <div className="cs_cta_shape2">
//                   {/* <img src="https://v11tech.com/assets/img/stroke.svg" alt="Icon"> */}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </section>
//       </div>

//       {/* <!--Start Footer Section --> */}
//       <footer className="cs_site_footer cs_color_1 pt-4">
//         <div className="cs_footer_shape1">
//           {/* <img src="https://v11tech.com/assets/img/Vector1.svg" alt="Vector-Icon"> */}
//         </div>

//         <div className="cs_main_footer mt-3">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-4 pe-3">
//                 <div className="cs_footer_widget">
//                   <div className="cs_text_field">
//                     {/* <img src="https://v11tech.com/assets/img/Logo_Last.png" alt="Logo" style="max-height: 45px;"> */}
//                     <p className="cs_text_white mb-0 mt-3 justify">
//                       Ours V11 POS Software is the ultimate solution designed to transform your business operations into a streamlined and efficient powerhouse. With a focus on simplicity, versatility, and cutting-edge technology.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- .col --> */}
//               <div className="col-lg-2" id="footer-quick">
//                 <div className="cs_footer_widget ms-3">
//                   <h2 className="cs_footer_widget_title">Quick Links</h2>
//                   <ul className="cs_footer_widget_nav cs_mp0 footer-menu">
//                     <li>
//                       <a href="https://v11tech.com/">Home</a>
//                     </li>
//                     <li>
//                       <a href="https://v11tech.com/terms-and-conditions">Terms and Conditions</a>
//                     </li>

//                     <li>
//                       <a href="https://v11tech.com/privacy-policy">Privacy Policy</a>
//                     </li>
//                     <li>
//                       <a href="https://v11tech.com/contact">Contact Us</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* <!-- .col --> */}
//               <div className="col-lg-3">
//                 <div className="cs_footer_widget">
//                   <h2 className="cs_footer_widget_title text-centers ms-4">Download Our App</h2>
//                   <div className="mt-10 play-img">
//                     {/* <img src="https://v11tech.com/assets/img/play_app_store.png" alt="Play &amp; APP Store"> */}
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- .col --> */}
//               <div className="col-lg-3">
//                 <div className="cs_footer_widget">
//                   <h2 className="cs_footer_widget_title text-centers">Join us on social media</h2>
//                   <div className="footer-txt"><span className="txt">Follow us</span></div>
//                   <div className="cs_footer_widget footer_social">
//                     <div className="cs_social_btn cs_style_1 d-flex">

//                       <a href="https://www.facebook.com/v11tech/" target="_blank" title="">
//                         <i className="fa-brands fa-facebook-f"></i>
//                       </a>

//                       <a href="https://www.twitter.com/" target="_blank" title="Twitter">
//                         <i className="fa-brands fa-x-twitter"></i>
//                       </a>

//                       <a href="https://www.linkedin.com/company/v11-tech/?viewAsMember=true" target="_blank" title="LinkedIN">
//                         <i className="fa-brands fa-linkedin-in"></i>
//                       </a>

//                       <a href="https://www.instagram.com/v11tech/" target="_blank" title="Instagram">
//                         <i className="fa-brands fa-instagram"></i>
//                       </a>

//                       <a href="https://wa.me/+85268098597" target="_blank" title="Whatsapp">
//                         <i className="fa-brands fa-whatsapp"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="cs_footer_widget">
//                   <div className="mt-10">
//                     {/* <img className="mb-5" src="https://v11tech.com/assets/img/footer_securePayments.jpeg" alt="Secure Payments Gateways"> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container cs_copyright_text cs_text_white text-center mt-3">
//             Copyright 2025.
//             <a href="javascript:void(0)" target="_blank" title="" className="cs_site_link cs_text_accent">
//               V11 TECH         </a>
//           </div>
//         </div>
//       </footer>
//       {/* <!--End Footer Section --> */}
//       {/* <!-- Back to top btn --> */}

//       <div id="cs_backtotop" className="">
//         {/* style="height: 25px;" */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6" >
//           <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
//         </svg>
//       </div>
//     </>
//   )
// }

// export default App

