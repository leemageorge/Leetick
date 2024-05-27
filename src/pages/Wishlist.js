import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title={"Wishlist"} />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                        <div className='col-3'>
                          
                            <div className='wishlist-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                                <div className='Wishlist-card-image'>
                                    <img src='images/watch.jpg' alt='watch' />
                                </div>
                                <div className='wishlist-card-details py-3 px-3'>
                                    <h5 className='title'>Smart Watch with Advanced Health Monitoring, Fitness Tracking</h5>
                                    <h6 className='price'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                          
                            <div className='wishlist-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                                <div className='Wishlist-card-image'>
                                    <img src='images/watch.jpg' alt='watch' />
                                </div>
                                <div className='wishlist-card-details py-3 px-3'>
                                    <h5 className='title'>Smart Watch with Advanced Health Monitoring, Fitness Tracking</h5>
                                    <h6 className='price'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                          
                            <div className='wishlist-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                                <div className='Wishlist-card-image'>
                                    <img src='images/watch.jpg' alt='watch' />
                                </div>
                                <div className='wishlist-card-details py-3 px-3'>
                                    <h5 className='title'>Smart Watch with Advanced Health Monitoring, Fitness Tracking</h5>
                                    <h6 className='price'>$100</h6>
                                </div>
                            </div>
                        </div>
                </div> 
            </Container>
        </>
    )
}

export default Wishlist