import React from 'react';
import './Slider.css';


const Slider = () => {
    return(
        <>
             <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                
                <img src="https://i.ibb.co/1sjNzSr/slide1.jpg" className="d-block slide1image"alt="slide1"/>
               
                <div className="slidecard1"> 
                    <div className="card rounded-0">
                        <div className="card-body">
                          <h1 className="card-title">Subscribe to the best of Udemy</h1>
                          <p className="card-text">With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.</p>
                          <a href="/home" className="card-link">Learn more.</a>
                        </div>
                      </div>
                  </div>
                
                
              </div>
              <div className="carousel-item">
                <img src="https://i.ibb.co/5v0y19q/slide2.png" className="d-block slide2image" alt="slide2"/>

                <div className="slidecard2"> 
                    <div className="card rounded-0">
                        <div className="card-body">
                          <h1 className="card-title">New to Udemy? Lucky you.</h1>
                          <p className="card-text">Courses start at ₹449. Get your new-student offer before it expires.</p>
                          
                        </div>
                      </div>
                  </div>

              </div>
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </>
    )
}

export default Slider;