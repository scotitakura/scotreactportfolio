import React from "react"
import "../index.css"
import "../settings.css"
// import "../vendor.css"

function Body() {
  return (
    <div>
      {/* <div id="preloader" class="preloader">
        <div class="spinner-grow text-white" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div> */}

      <div class="page-wrapper">

        <nav class="navbar navbar-expand-lg navbar-custom navbar-light fixed-top">
          <div class="container">

            <a class="navbar-brand  mr-auto " href="index.html">Scot
              {/* <img src="assets/images/logo.png" alt="Logo"> */}
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="60"><path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path><path class="line middle" d="m 30,50 h 40"></path><path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path></svg>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
              <ul class="navbar-nav ml-auto">
                <li><a class="nav-link active" href="#home">HOME</a></li>
                <li><a class="nav-link" href="#services">SERVICE</a></li>
                <li><a class="nav-link" href="#resume">EXPERTISES</a></li>
                <li><a class="nav-link" href="#work">Works</a></li>
                {/* <li><a class="nav-link" href="#blog">Blog</a></li> */}
                <li><a class="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

          <section class="section-home " id="home">
            <div class="overlay d-flex justify-content-center align-items-center">
              <div class="overlay-wrap section-head">
                <span class="mb-2">Hello, I am</span>
                <h1>Scot Itakura</h1>

              </div>
            </div>
            <a id="video" class="youtube-bg" data-property="{videoURL:'https://youtu.be/S4L8T2kFFck',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>
          </section>	

        <section class="section section-about" id="about">

          <div class="section-about-wrap">

            <div class="row justify-content-center align-items-center">
              
              <div class="col-md-7">
                <div class="about-desc">
                  <div class="about-desc-content">
                    <h2>About Me</h2>
                    <p class="mt-4 font-weight-light">Front-end web developer leveraging a background in geophysical data analytics and scientific coding programs to design and create unique, memorable, and dependable websites.</p>
                  </div>
                  <ul class="about-desc-social mt-4 list-unstyled list-inline">
                      <li class="list-inline-item"><a href="https://github.com/scotitakura"><i class="fab fa-github"></i></a></li>
                      <li class="list-inline-item"><a href="https://www.linkedin.com/in/scot-itakura-289376157/"><i class="fab fa-linkedin-in"></i></a></li>
                      {/* <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow"></i></a></li>
                      <li class="list-inline-item"><a href="#"><i class="fab fa-dribbble"></i></a></li> */}
                  </ul>
                </div>
              </div>

              <div class="col-md-5 d-none d-md-block">
                <img class="img-fluid img-thumbnail" src="assets/images/headshot.jpg" alt="About Picture"/>
              </div>

            </div>

          </div>

        </section>

        <section class="section section-services" id="services">
          <div class="container">
            <div class="section-head">
              <span>WHAT I DO</span>
              <h2>My Services</h2>
            </div>

            <div class="row mt-4">
              <div class="col-sm-6 col-md-4">
                <div class="services-flip wow fadeInUp" data-wow-duration="1.5s">
                  <div class="services-list">
                    <div class="services-list-front services-list-1">
                      <div class="flip-content">
                        <h5 class="mb-0">Graphic Design</h5>
                      </div>
                    </div>
                    <div class="services-list-back">
                      <div class="flip-content">
                        <div class="services-list-icon">
                          <i class="fas fa-paint-brush  "></i>
                        </div>
                        <div class="mt-4">
                          <h5 class="mb-0">Graphic Design</h5>
                          <p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                  <div class="services-list">
                    <div class="services-list-front services-list-2">
                      <div class="flip-content">
                        <h5 class="mb-0">Web Development</h5>
                      </div>
                    </div>
                    <div class="services-list-back">
                      <div class="flip-content">
                        <div class="services-list-icon">
                          <i class="fas fa-palette  "></i>
                        </div>
                        <div class="mt-4">
                          <h5 class="mb-0">Web Development</h5>
                          <p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                  <div class="services-list">
                    <div class="services-list-front services-list-3">
                      <div class="flip-content">
                        <h5 class="mb-0">Media Marketing</h5>
                      </div>
                    </div>
                    <div class="services-list-back">
                      <div class="flip-content">
                        <div class="services-list-icon">
                          <i class="fas fa-compact-disc  "></i> 
                        </div>
                        <div class="mt-4">
                          <h5 class="mb-0">Media Marketing</h5>
                          <p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
                  <div class="services-list">
                    <div class="services-list-front services-list-4">
                      <div class="flip-content">
                        <h5 class="mb-0">Advetising</h5>
                      </div>
                    </div>
                    <div class="services-list-back">
                      <div class="flip-content">
                        <div class="services-list-icon">
                          <i class="fa fa-puzzle-piece  " aria-hidden="true"></i>
                        </div>
                        <div class="mt-4">
                          <h5 class="mb-0">Advetising</h5>
                          <p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".8s">
                  <div class="services-list">
                    <div class="services-list-front services-list-5">
                      <div class="flip-content">
                        <h5 class="mb-0">Game Development</h5>
                      </div>
                    </div>
                    <div class="services-list-back">
                      <div class="flip-content">
                        <div class="services-list-icon">
                          <i class="fa fa-gamepad  " aria-hidden="true"></i> 
                        </div>
                        <div class="mt-4">
                          <h5 class="mb-0">Game Development</h5>
                          <p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                  <div class="services-list">
                    <div class="services-list-front services-list-6">
                      <div class="flip-content">
                        <h5 class="mb-0">Analytics</h5>
                      </div>
                    </div>
                    <div class="services-list-back">
                      <div class="flip-content">
                        <div class="services-list-icon">
                          <i class="far fa-chart-bar  "></i> 
                        </div>
                        <div class="mt-4">
                          <h5 class="mb-0">Analytics</h5>
                          <p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-dark section-resume" id="resume">
          <div class="container">
            <div class="section-head">
              <span>My Resume</span>
              <h2>My Expertises</h2>
            </div>

            <div class="row mt-4">
              <div class="col-sm-6 col-lg-6">
                <h5 class="section-subHead mt-3"> My Experience</h5>
                <div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
                  <div>
                    <h5>Senior Architect</h5>
                    <h6 class="badge badge-dark d-inline-block my-3">2015 - Present | Google</h6>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  </div>
                </div>
                <div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                  <div>
                    <h5>Front-end Developer</h5>
                    <h6 class="badge badge-dark d-inline-block my-3">2013 - 2015 | Facebook Inc.</h6>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  </div>
                </div>
                <div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                  <div>
                    <h5>UI Developer</h5>
                    <h6 class="badge badge-dark d-inline-block my-3">2011 - 2013 | Envato.</h6>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-6">
                <h5 class="section-subHead mt-3"> My Education</h5>
                <div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
                  <div>
                    <h5>Master in Arts</h5>
                    <h6 class="badge badge-dark d-inline-block my-3">2006-2008</h6>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  </div>
                </div>
                <div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                  <div>
                    <h5>Art University</h5>
                    <h6 class="badge badge-dark d-inline-block my-3">2006-2008</h6>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  </div>
                </div>
                <div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                  <div>
                    <h5>Art University</h5>
                    <h6 class="badge badge-dark d-inline-block my-3">2006-2008</h6>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-sm-6 col-lg-6">
                <h5 class="section-subHead mt-3"> Design Skills</h5>
                <div class="resume-panel b-box hover-state p-4 mt-3">

                  <div class="mb-4 pb-2 wow fadeInUp"  data-wow-duration="1.5s">
                    <h6>Graphic Design </h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "95%;"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div class="mb-4 pb-2 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".2s">
                    <h6>Logo Design</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "75%;"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div class="mb-4 pb-2 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".3s">
                    <h6>Logo Design</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "85%;"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div class="mb-0 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".4s">
                    <h6>Photoshop & Figma</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "80%;"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-sm-6 col-lg-6">
                <h5 class="section-subHead mt-3"> Coding Skills</h5>
                <div class="resume-list b-box hover-state p-4 mt-3">
                  <div class="mb-4 pb-2 wow fadeInUp" data-wow-duration="1.5s">
                    <h6>RWD</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "90%;"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div class="mb-4 pb-2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                    <h6>Bootstrap</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "85%;"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div class="mb-4 pb-2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <h6>Jekyll</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "70%;"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div class="mb-0 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <h6>Javascript</h6>
                    <div class="progress mt-2" style={{height: "7px;"}}>
                      <div class="progress-bar" role="progressbar" style={{width: "85%;"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                
          </div>
        </section>

        <section class="section section-work" id="work">
          <div class="container">
            <div class="section-head text-center">
              <span>Portfolio</span>
              <h2>My Works</h2>
            </div>
          </div>
          <div class="container swiper-container swiper-portfolio wow fadeInUp" data-wow-duration="1.5s">
            <div class=" swiper-wrapper">
              <div class="portfolio-item swiper-slide " data-groups="all slideshow">
                <a href="assets/images/p1-1.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p1-1.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide image" data-groups="all image">
                <a href="assets/images/p2-2.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p2-2.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide slideshow" data-groups="all slideshow">
                <a href="assets/images/p3-3.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p3-3.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide video" data-groups="all video">
                <a href="assets/images/p4-4.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p4-4.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide  slideshow" data-groups="all slideshow">
                <a href="assets/images/p5-5.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p5-5.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide image" data-groups="all image">
                <a href="assets/images/p6-6.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p6-6.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide video" data-groups="all video">
                <a href="assets/images/p7-7.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p7-7.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide  slideshow" data-groups="all slideshow">
                <a href="assets/images/p8-8.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p8-8.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-item swiper-slide image" data-groups="all image">
                <a href="assets/images/p9-9.jpg" class="portfolio-item--content simple-ajax-popup">
                  <div class="portfolio-item--img b-box">
                    <img src="assets/images/p9-9.jpg" class="img-fluid mx-auto" alt="work-img"/>
                  </div>
                  <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                    <div class="portfolio-item--desc-in">
                      <h3 class="mb-2 text-white">The wall</h3>
                      <p class="text-white">Slideshow</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>
            <div class="portfolio-pagination">
              
            </div>
          </div>
        </section>

        <section class="section section-dark section-testimony" id="testimony">
          <div class="container">
            <div class="section-head text-center">
              <span>Kind Words</span>
              <h2>testimonial</h2>
            </div>
            <div class="row mt-4">
              <div class="col-lg-12">
                <div class="swiper-container swiper-testimony wow fadeInUp"  data-wow-duration="1.5s">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide single-testimonials ">
                      <div class="single-testimonials-in text-center p-4 b-box mx-auto">
                        <img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
                        <p class="pt-2 mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                      </div>
                    </div>

                    <div class="swiper-slide single-testimonials ">
                      <div class="single-testimonials-in text-center p-4 b-box mx-auto">
                        <img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
                        <p class="pt-2 mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin.  Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
                        <span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                      </div>
                    </div>

                    <div class="swiper-slide single-testimonials ">
                      <div class="single-testimonials-in text-center p-4 b-box mx-auto">
                        <img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
                        <p class="pt-2 mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                      </div>
                    </div>

                    <div class="swiper-slide single-testimonials ">
                      <div class="single-testimonials-in text-center p-4 b-box mx-auto">
                        <img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
                        <p class="pt-2 mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                        <span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                      </div>
                    </div>

                    <div class="swiper-slide single-testimonials ">
                      <div class="single-testimonials-in text-center p-4 b-box mx-auto">
                        <img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
                        <p class="pt-2 mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
                        <span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                      </div>
                    </div>

                  </div>
                  <div class="swiper-pagination"></div>
                </div>

                <div class="testimony-nav">
                  <a href="#" class="swiper-button-next"></a>
                  <a href="#" class="swiper-button-prev"></a>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section class="section  section-freelance section-light text-center ">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-head wow fadeInUp" data-wow-duration="1.5s">
                  <h2>Let's work together!</h2>
                </div>
                <div class="mt-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                  <a href="#" class="btn btn-outline hover-state">Hire Me!</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section-dark section-contact" id="contact">
          <div class="container">
            <div class="section-head">
              <span>say Hello</span>
              <h2>Contact </h2>
            </div>

            <div class="contact-map mt-5">
              <h5 class="section-subHead mb-4"> My Location</h5>
              <div class="contact-map--container b-box wow fadeInUp" id="map" data-wow-duration="1.5s"></div>
            </div>
          </div>

          <div class="contact-Otherdetails">
            <div class="container">
              <div class="contact-details">
                <h5 class="section-subHead pt-5 mb-4"> Get in Touch</h5>
                <div class="row">
                  <div class="col-md-4 col-lg-4">
                    <div class="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s">
                      <div class="mb-4">
                        <i class="fas fa-map-marked-alt"></i>
                      </div>
                      <div class="mt-2">
                        <a href="#" class="">144 Mangan St, Miami, FL</a>
                        <p class="mt-1 font-weight-bold ">Address</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s">
                      <div class="mb-4">
                        <i class="fas fa-mobile-alt  "></i>
                      </div>
                      <div class="mt-2">
                        <a href="tel:9876543210" class="">+987 654 3210</a>
                        <p class="mt-1 font-weight-bold ">Call Us</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                      <div class="mb-4">
                        <i class="fas fa-envelope  "></i>
                      </div>
                      <div class="mt-2">
                        <a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
                        <p class="mt-1 font-weight-bold ">Email Us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact-form mt-5">
                <form method="post" action="php/contact.php" id="contactForm"  data-toggle="validator">
                  <h5 class="section-subHead mb-2"> Contact Form</h5>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s">
                        <input name="name" id="name" type="text" class="form-control b-box" placeholder="Your Name *" required/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                        <input name="email" id="email" type="email" class="form-control b-box" placeholder="Your Email *" required/>
                      </div>
                    </div>                                
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <input type="text" class="form-control b-box" id="subject" placeholder="Your Subject.." required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                        <textarea name="comments" id="comments" rows="4" class="form-control b-box" placeholder="Your message..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 mt-4 mb-5 text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                      <button type="submit" class="submitBnt btn hover-state">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer section section-light">
          <div class="container">
            <p class="copyright text-center mb-0">&copy; Justin 2020 | All Right Reserved</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Body;