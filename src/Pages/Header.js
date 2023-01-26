import React from 'react'

const Header = () => {
  return (
    <>
      <div id="header" className="header_wrapper bg-secondary">
            <ul className="header-menu d-flex float-start">
                <li><a href="https://wa.me/9466452847"><i className="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="mailto:abhishekpande357@gmailcom"><i className="fa-sharp fa-solid fa-envelope"></i></a></li>
                <li><a href="callto:+91-8226810016"><i className="fa-solid fa-phone"></i></a></li>
            </ul>
            <ul className="header-menu d-flex float-end">
                <li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkdin.com"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.gmail.com"><i className="fa-sharp fa-solid fa-envelope"></i></a></li>
            </ul>
    </div>
    </>
  )
}

export default Header;