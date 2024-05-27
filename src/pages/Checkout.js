import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg"
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1='checkout-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Leetick</h3>
                                <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li className="breadcrumb-item total-price"><Link to="/cart" className='text-dark'>Cart</Link></li> &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Information</li>&nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li>&nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                        
                                    </ol>
                                </nav>
                                <h4 className='title total'>Contact information</h4>
                                <p className='user-details total total-price'>Dev Lee (freelancedev.lee@gmail.com)</p>
                                <h4 className='mb-4'>Shipping Address</h4>
                                <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                    <select className='form-control form-select'>
                                        <option value="" selected disabled> Select Country</option>
                                    </select>
                                   </div>
                                   <div className='flex-grow-1'>
                                    <input className='form-control' type='text' placeholder='First Name' />
                                   </div>
                                   <div className='flex-grow-1'>
                                    <input className='form-control' type='text' placeholder='Last Name' />
                                   </div>
                                   <div className='w-100'>
                                    <input className='form-control' type='text' placeholder='Address' />
                                   </div>
                                   <div className='w-100'>
                                    <input className='form-control' type='text' placeholder='Apartment,suite, etc' />
                                   </div>
                                   
                                   <div className='flex-grow-1'>
                                    <input className='form-control' type='text' placeholder='City' />
                                   </div>
                                   <div className='flex-grow-1'>
                                    <select className='form-control form-select'>
                                        <option value="" selected disabled> Select State</option>
                                    </select>
                                   </div>
                                   <div className='flex-grow-1'>
                                    <input className='form-control' type='text' placeholder='Zip code' />
                                   </div>
                                   <div className='w-100'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <Link to="/cart" className='text-dark'><BiArrowBack className='me-2' />Return to cart</Link>
                                        <Link to="/cart" className='button'>Continue to Shipping</Link>
                                    </div>
                                   </div>
                                   
                                </form>
                                
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className="border-bottom py-4">
                              <div className='d-flex align-items-center mb-2 justify-content-between'>
                              <div className='w-75 d-flex gap-10'>
                              <div className='position-relative w-25'>
                                    <span style={{"top":"-10px", "right":"2px"}} className='badge bg-secondary rounded-circle text-white position-absolute'>1</span>
                                    <img src={watch} alt="watch" className='img-fluid'/>
                                </div>
                                <div>
                                    <h5 className='total-price'>fgdfgfdgdfg</h5>
                                    <p className='total-price'>fggdfghdfh</p>
                                </div>
                              </div>
                                <div>
                                    <h5 className='total'> $100</h5>
                                </div>
                              </div>
                            </div>
                            <div className="border-bottom py-4">
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Sub Total</p>
                                <p className='total-price'>$100</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$100</p>
                            </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$100</h5>
                            </div>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout