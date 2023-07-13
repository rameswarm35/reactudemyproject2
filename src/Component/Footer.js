import React from 'react';
import './Footer.css';


const Footer = () => {
    return(
        <>
              <footer>
                <div className="container-fluid containfootr1">
                    <div className="footer1">
                        <div className="row">
                                <div className="col-lg-3 mt-4 footer2a">
                                    <ul>
                                        <li>
                                        <a href="/home">Udemy Business</a>
                                        </li>
                                        <li>
                                        <a href="/home">Teach on Udemy</a>
                                        </li>
                                        <li>
                                        <a href="/home">Get the app</a>
                                        </li>
                                        <li>
                                        <a href="/home">About us</a>
                                        </li>
                                        <li>
                                        <a href="/home">Contact us</a>
                                        </li>
                                    </ul>
                                
                                    <div className="logoimgefoot">
                                        <a href="/home"><img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy" width="91" height="34" className="img-fluid"/></a>
                                    </div>

                                </div>
                                <div className="col-lg-3 mt-4 footer2a">
                                    <ul>
                                    <li>
                                        <a href="/home">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/home">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/home">Help and Support</a>
                                    </li>
                                    <li>
                                        <a href="/home">Affiliate</a>
                                    </li>
                                    <li>
                                        <a href="/home">Investors</a>
                                    </li>
                                    </ul>
                            
                                </div>

                                <div className="col-lg-3 mt-4 footer2a">
                                        <ul>
                                            <li>
                                            <a href="/home">Terms</a>
                                            </li>
                                            <li>
                                            <a href="/home">Privacy policy</a>
                                            </li>
                                            <li>
                                            <a href="/home">Cookie settings</a>
                                            </li>
                                            <li>
                                            <a href="/home">Sitemap</a>
                                            </li>
                                            <li>
                                            <a href="/home">Accessibility statement</a>
                                            </li>
                                        </ul>
                            
                                </div>
                                <div className="col-lg-3 mt-4">
                                    
                                        <a className="btn btn-dark language2 rounded-0 fw-bold" href="/home" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-language" aria-hidden="true">   English</i>
                                        </a>        
                                        
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Choose a language</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="container-fluid">
                                                        <div className="row d-flex">
                                                               <div className="col-lg-4">
                                                                     <a className="btn rounded-0" href="/home" role="button">English</a>
                                                                     <a className="btn rounded-0" href="/home" role="button">Spanish</a>
                                                                     <a className="btn rounded-0" href="/home" role="button">Hindi</a>
                                                                     <a className="btn rounded-0" href="/home" role="button">French</a>
                                                                     <a className="btn rounded-0" href="/home" role="button">Russian</a>
                                                                     <a className="btn rounded-0" href="/home" role="button">Portuguese</a>
                                                                        
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <a className="btn rounded-0" href="/home" role="button">German</a>
                                                                    <a className="btn rounded-0" href="/home" role="button">Japanese</a>
                                                                    <a className="btn rounded-0" href="/home" role="button">Nigerian</a>
                                                                    <a className="btn rounded-0" href="/home" role="button">Wu Chinese</a>
                                                                    <a className="btn rounded-0" href="/home" role="button">Korean</a>
                                                                    <a className="btn rounded-0" href="/home#" role="button">Persian</a>
                                                                    
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <a className="btn rounded-0" href="/home" role="button">Yoruba</a>
                                                                <a className="btn rounded-0" href="/home" role="button">Polish</a>
                                                                <a className="btn rounded-0" href="/home" role="button">Burmese</a>
                                                                <a className="btn rounded-0" href="/home" role="button">Tamil</a>
                                                                <a className="btn rounded-0" href="/home" role="button">Telugu</a>
                                                                <a className="btn rounded-0" href="/home" role="button">Vietnamese</a>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>  
                                                
                                                </div>
                                        
                                                </div>
                                            </div>
                                    </div>
                                        <div className="copyrght">
                                          &copy; 2023 Udemy, Inc.
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>

  </footer>  
        </>
    )
}

export default Footer;