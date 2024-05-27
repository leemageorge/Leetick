import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaInfo } from "react-icons/fa";
import Container from '../components/Container';
const Contact = () => {
  return (
   <>
       <Meta title={"Contacts"} />
       <BreadCrumb title={"Contacts"} />
       <Container class1='contact-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251491.33462774853!2d76.14347535564598!3d9.971172357568777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715432179627!5m2!1sen!2sin" 
            title="myFrame"
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
            </div>
            <div className='col-12'>
              <div className='contact-inner-wrapper d-flex justify-content-between gap-10 mt-3'>
                <div>
                  <h3 className='contact-title mb-4'>
                    Contact
                  </h3>
                <form action=''className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control'placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" className='form-control'placeholder='Email'/>
                  </div>
                  <div>
                    <input type="text" className='form-control'placeholder='Phone Number'/>
                  </div>
                  <div>
                    <textarea name="" id=""  cols="30" rows="3" className='w-100 form-control'placeholder='Comment'/>
                  </div>
                  <div>
                    <button className='button'>Submit</button>
                  </div>

                </form>
                </div>
                <div>
                <h3 className='contact-title mb-4'>
                    Get In Touch With Us
                  </h3>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>9/200, M.G Road Ernakkulam</address>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'><FiPhoneCall className='fs-5'/><a href="tel: +91 96335588741"  > +91 96335588741</a></li>
                    <li className='mb-3 d-flex align-items-center gap-15'><CiMail className='fs-5' /><a href="mailto: leetick@info.com"  > leetick@info.com</a></li>
                    <li className='mb-3 d-flex align-items-center gap-15'><FaInfo className='fs-10' /><p className='mb-0'>Monday-Friday 10AM - 8PM</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
  </>
  )
}

export default Contact