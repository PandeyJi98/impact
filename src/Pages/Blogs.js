import React from 'react'
import img1 from "../Assests/Photos/s1.jpg"
import img2 from "../Assests/Photos/Bill-Gates-2011.webp"
import img3 from "../Assests/Photos/s2.jpg"
import img4 from "../Assests/Photos/steve job.jpg"
import img5 from "../Assests/Photos/s3.jpg"
import img6 from "../Assests/Photos/Elon Musk.webp"

const Blogs = () => {
  return (
    <>
    <section className="blogs">
    <div className="container">
        <div className="blog-header">
            <h1 className="service-head pt-5 pb-2">Recents Post And Blogs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas vitae quia non est dolor.
            </p>
        </div>
        <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
                <article>
                    <div className="post-img">
                        <img src={img1} className="img-fluid" alt=""/>
                    </div>
                    <p className="post-category">Sports</p>
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <div className="d-flex align-item-center">
                        <img src={img2} className="img-fluid post-author-img" alt=""/>
                        <div>
                            <p className="post-author">Vivek Tiwari</p>
                             <p className="date">May 15, 2022</p></div> 
                        
                    </div>
                </article>
            </div>
            <div className="col-xl-4 col-md-6">
                <article>
                    <div className="post-img">
                        <img src={img3} className="img-fluid" alt=""/>
                    </div>
                    <p className="post-category">Business</p>
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <div className="d-flex align-item-center">
                        <img src={img4} className="img-fluid post-author-img" alt=""/>
                        <div>
                            <p className="post-author">Ravi Mishra</p>
                             <p className="date">August 23, 2022</p></div> 
                        
                    </div>
                </article>
            </div>
            <div className="col-xl-4 col-md-6">
                <article>
                    <div className="post-img">
                        <img src={img5} className="img-fluid" alt=""/>
                    </div>
                    <p className="post-category">Politics</p>
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <div className="d-flex align-item-center">
                        <img src={img6} className="img-fluid post-author-img" alt=""/>
                        <div>
                            <p className="post-author">Abhay Pandey</p>
                             <p className="date">july 1, 2022</p></div> 
                        
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Blogs