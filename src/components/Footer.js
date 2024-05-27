import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsFacebook, BsYoutube,BsInstagram } from 'react-icons/bs'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
    <footer className='py-4' >
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex align-items-center gap-10'>
                <img src={newsletter} alt="newsletter"/>
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2> 
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
                <input type="text" className="form-control py-2"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-1"
                  id="basic-addon2">Subscribe</span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3' >
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact us</h4>
            <div>
              <address className='text-white'>
                LeeTick Store No: 2555
                <br/>No: 2555, M.G Road Ernakulam-682055
                <br />Kerala, India
               
                <a href='tel: +91 9002233004455' className='mt-4  text-white d-block mb-2'>+91 9002233004455</a>
                <a href='mailto: leetickstore@info.com' className='mt-4  text-white d-block mb-2'>leetickstore@info.com</a>
                <div className='social-icons d-flex align-items-center gap-30'>
                  <a href="/"><BsLinkedin className='text-white fs-4 mt-4'/></a>
                  <a href="/"><BsFacebook className='text-white fs-4 mt-4'/></a>
                  <a href="/"><BsGithub className='text-white fs-4 mt-4'/></a>
                  <a href="/"><BsInstagram className='text-white fs-4 mt-4'/></a>
                  <a href="/"><BsYoutube className='text-white fs-4 mt-4'/></a>
                  
                </div>
              </address>
            </div>

          </div>
          <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-link d-flex flex-column'>
            <Link to="/privacy-policy" className='text-white mb-1 py-2'>Privacy Policy</Link>
            <Link to="/refund-policy" className='text-white mb-1 py-2'>Refund Policy</Link>
            <Link to="/shipping-policy" className='text-white mb-1 py-2'>Shipping Policy</Link>
            <Link to="/term-conditions" className='text-white mb-1 py-2'>Terms of service</Link>
            <Link className='text-white mb-1 py-2'>Blogs</Link>
          </div>
          </div>
          <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white mb-1 py-2'>Search</Link>
            <Link className='text-white mb-1 py-2'>About us</Link>
            <Link className='text-white mb-1 py-2'>Faq</Link>
            <Link className='text-white mb-1 py-2'>Contact</Link>
            <Link className='text-white mb-1 py-2'>Size Chart</Link>
          </div>
          </div>
          <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white mb-1 py-2'>Accessories</Link>
            <Link className='text-white mb-1 py-2'>Laptop</Link>
            <Link className='text-white mb-1 py-2'>Headphones</Link>
            <Link className='text-white mb-1 py-2'>Smart watched</Link>
            <Link className='text-white mb-1 py-2'>Tablets</Link>
          </div>

          </div>

        </div>
      </div>
    </footer>
    <footer className='mb-0 text-white text-center py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
               &copy; {new Date().getFullYear()} Powered by Leetick Digital Store
          </div>
        </div>
      </div>
    
    </footer>
    </>
  )
}

export default Footer