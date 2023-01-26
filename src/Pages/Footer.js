import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="footer">
    <div className="container">
        <div className="row gy-4">
             <div className="col-lg-5 logo">
                  <a href="impact1.html" className="d-flex  text-center">Impact</a>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Cupiditate minus quia soluta numquam quos quasi sint dolorum sed eos facere.</p>
              
                  <div className="icons d-flex">
                  <i className="icon-item fa-brands fa-instagram"></i>
                  <i className="icon-item fa-brands fa-facebook"></i>
                  <i className="icon-item fa-brands fa-youtube"></i>
                  <i className="icon-item fa-brands fa-google"></i>
                </div>
            </div>
            <div className="col-xl-2 col-md-6 footer-links">
                <h3 className="logo">Useful Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Terms Of Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="col-xl-2 col-md-6 footer-links">
                <h3 className="logo">Our Services</h3>
                <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Web Devlopment</a></li>
                    <li><a href="#">Product Management</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Graphic Design</a></li>
                </ul>
            </div>
            <div className="col-xl-3 col-md-12 logo">
              <h4>Contact Us</h4>
              <p>
                R113 Vani Vihar <br/><br/>
                uttem Nagar East <br/><br/>
                New Delhi 110059, India
                <br/><br/>
                Phone:
                +91 7909013763 <br/>
                Email:
                abhishekpande357@gmailcom
              </p>
            </div>
          </div>
        <div className="text-center logo">
            <p>All Right Reserved @2023 <br/> Designed By Abhishek Pandey</p>
           
        </div>
    </div>
</footer>
   </>
  )
}

export default Footer