import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact">
    <div className="container ">
        <div className="text-center">
            <h1 className="service-head pt-5 pb-2">Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium dolorem facere!</p>
        </div>
        <div className="row py-5">
            <div className="col-xl-4">
                <div className="info-container">
                    <div className="info-item d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Location</h4>
                            <p>R113 Vani Vihar, Uttem Nagar
                                New Delhi, India
                            </p>
                        </div>
                    </div>
                    <div className="info-item d-flex">
                        <i className="fa-regular fa-envelope"></i>
                        <div>
                            <h4>Email:</h4>
                            <p>abhishekpande357@gmailcom
                            </p>
                        </div>
                    </div>
                    <div className="info-item d-flex">
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <h4>Call:</h4>
                            <p>+91 7909013763
                            </p>
                        </div>
                    </div>
                    <div className="info-item d-flex">
                        <i className="fa-regular fa-clock"></i>
                        <div>
                            <h4>Open Hour:</h4>
                            <p>Mon-Sat: 9AM - 6PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                
                   <form action="" className="form-style">
                    <div className="row d-flex">
                        <div className="col-xl-6 form-group mt-3"><input type="text" name="name" id="" className="form-control" placeholder="Enter Your Name"/></div>
                    
                    <div className="col-xl-6 form-group mt-3"><input type="email" name="email" id="" className="form-control" placeholder="Enter Your Email"/></div>
                  </div>
                  <div className="form-group mt-3"><input type="text" name="subject" className="form-control" id="" placeholder="Subject"/></div>
                  <div className="form-group mt-3"><textarea name="" id="" className="form-control"  rows="7" placeholder="Massage"></textarea></div>
                  <div className="text-center mt-5">
                    <button type="submit" className="send-massage">Send Massage</button>
                  </div>
                   </form>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Contact;