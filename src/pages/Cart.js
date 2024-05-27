import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from "../images/watch.jpg"
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title={"Cart"} />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header d-flex align-items-center justify-content-between py-3 mb-2'>
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            <div className='cart-data d-flex align-items-center justify-content-between py-3'>
                                <div className='cart-col-1 d-flex align-items-center gap-15'>
                                    <div className='w-25'>
                                        <img src={watch} alt="watch" className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <p>heading</p>
                                        <p>Size : s</p>
                                        <p>Color : #eaeaea</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>$ 100</h5>
                                </div>
                                <div className='cart-col-3  d-flex align-items-center gap-15'>
                                    <div><input className='form-control' type='number' id="" name=" " min={1} max={10} /></div>
                                    <div className='cart-delete'><AiFillDelete className='text-light' /></div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 py-2 mt-4'>
                           <div className='d-flex justify-content-between align-items-baseline'>
                           <Link to="/product" className='button'>Continue to Shopping</Link>
                           <div className='d-flex flex-column align-items-end'>
                            <h4>Sub Total: $100</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to="/checkout" className='button w-100 d-flex align-items-center justify-content-center'>Checkout</Link>
                           </div>
                           </div>
                        </div>
            </div> 
            </Container>
        </>
    )
}

export default Cart