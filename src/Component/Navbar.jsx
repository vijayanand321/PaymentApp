import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
const[show ,setShow] =useState(false)


  return (
    <>
      <section className='navbar-bg'>
       <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <Link class="navbar-brand fo" to='/' >VKpay</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show?"show":""}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/' >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Service' >Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/About' >About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Contact' >Contact</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <button className="btn  btn-style" type="submit">SignUp</button>
        <button className="btn  btn-style-border btn-style" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar