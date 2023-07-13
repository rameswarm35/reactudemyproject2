import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <>
            <header> 
            
            <div className="container-fluid mt-1 bg-light">
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <div className="container-fluid">
                    <Link className='navbar-brand navImage' to="/"><img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy" width="90" height="50" className="img-fluid"/></Link>
                    
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark" href="/home" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Categories </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Development</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Web Development</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item fw-bold" href="/home">Popular topics</a></li>
                                                    <li><a className="dropdown-item" href="/home">JavaScript</a></li>
                                                    <li><a className="dropdown-item" href="/home">React JS</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Data Science</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item fw-bold" href="/home">Popular topics</a></li>
                                                    <li><a className="dropdown-item" href="/home">Python</a></li>
                                                    <li><a className="dropdown-item" href="/home">Machine Learning</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Business</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Entrepreneurship</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item fw-bold" href="/home">Popular topics</a></li>
                                                    <li><a className="dropdown-item" href="/home">Business Fundamentals</a></li>
                                                    <li><a className="dropdown-item" href="/home">ChatGPT</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Communication</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item fw-bold" href="/home">Popular topics</a></li>
                                                    <li><a className="dropdown-item" href="/home">Communication Skills</a></li>
                                                    <li><a className="dropdown-item" href="/home">Presentation Skills</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Finance & Accounting</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Accounting & Bookkeeping</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item fw-bold" href="/home">Popular topics</a></li>
                                                    <li><a className="dropdown-item" href="/home">Accounting</a></li>
                                                    <li><a className="dropdown-item" href="/home">Bookkeeping</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/home">Compliance</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item fw-bold" href="/home">Popular topics</a></li>
                                                    <li><a className="dropdown-item" href="/home">Anti-Money Laundering</a></li>
                                                    <li><a className="dropdown-item" href="/home">Criminology</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                </ul>
                            </li>

                            
                            <form className="d-flex">
                                <i className="fa fa-search siOne"></i><input className="form-control searchOne" type="search" placeholder="Search for anything" aria-label="Search"/>
                            </form>
                        <li className="nav-item udbusinesBton">
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Udemy Business
                                </a>
                            </p>
                            <div className="collapse cardOne" id="collapseExample">
                                <div className="card text-center udemybusinsCard">
                                    <div className="card-body">
                                    <h5 className="card-title">Get your team access to over 22,000 top Udemy courses, anytime, anywhere.
                                    </h5>
                                    <a href="/home" className="btn btn-dark rounded-0 fw-bold btn-square-md cardtextOne">Try Udemy Business</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Teach on Udemy
                                </a>
                            </p>
                            <div className="collapse cardOne" id="collapseExample1">
                                <div className="card text-center teachudemyCard">
                                    <div className="card-body">
                                    <h5 className="card-title">Turn what you know into an opportunity and reach millions around the world.
                                    </h5>
                                    <a href="/home" className="btn btn-dark rounded-0 fw-bold btn-square-md cardtextOne"> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item shopingcartNav">
                            <p>
                                <a className="btn btn-light" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-shopping-cart shopingcartfaIcon"></i>
                                </a>
                            </p>
                            <div className="collapse cardOne" id="collapseExample2">
                                <div className="card text-center">
                                    <div className="card-body">
                                    <h5 className="card-title">Your cart is empty.
                                    </h5>
                                    <a href="/home" className="btn btn-link rounded-0 shopingcartOne">Keep shopping</a>
                                    </div>
                                </div>
                            </div>
                        </li> 
                        <li className="nav-item navitemLogin">
                            {/* <a className="btn btn-light rounded-0 loginbtnOne" href="/" role="button">Log in</a> */}
                         <Link to="login" className='btn btn-light rounded-0 loginbtnOne'>Login
                        </Link>
                        
                        </li>    
                        <li className="nav-item navitemsignUp">
                            {/* <a className="btn btn-dark rounded-0" href="/home" role="button">Sign up</a> */}

                         <Link to="register" className='btn btn-dark rounded-0'>
                            Sign Up
                        </Link> 
                            

                        </li>    
                        <li className="nav-item navitemsLangage">

                             {/* Button trigger modal  */}

                            <a className="btn btn-light rounded-0 loginbtnOne" href="/home" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-language"></i></a>

                            
                                 {/* Modal  */}

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
                                                    <a className="btn rounded-0" href="/home" role="button">Persian</a>
                                                    
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
     
                                
                        </li>       
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
                    
            </header>    
        </>
    )
}

export default Header;