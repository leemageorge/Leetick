import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Colors from '../components/Colors'
import Container from '../components/Container'

const ComapreProduct = () => {
  return (
    <>
        <Meta title={"Compare"} />
        <BreadCrumb title={"Compare"} />
        <Container class1='compare-wrapper home-wrapper-2 py-3'>
           <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src='images/cross.svg' alt='' className='position-absolute cross img-fluid' />
                        <div className='product-card-image'>
                        <img src="images/watch.jpg" alt="watch"/>
                        </div> 
                        <div className='product-card-details'>
                            <h5 className='title'>Smart Watch with Advanced Health Monitoring, Fitness Tracking</h5>
                            <h6 className='price mt-3'>$100</h6>
                            <div className='product-card-detail'>
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Type:</h5>
                                <p>Watch Accessories</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>SKU:</h5>
                                <p>SKU028</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Colors:</h5>
                                <Colors className="mb-0"/>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Size:</h5>
                                <div className='d-flex gap-10'>
                                <p>S</p>
                                <p>M</p>
                                </div>
                                
                            </div>
                        </div>                                   
                    </div>
                </div>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src='images/cross.svg' alt='' className='position-absolute cross img-fluid' />
                        <div className='product-card-image'>
                        <img src="images/watch.jpg" alt="watch"/>
                        </div> 
                        <div className='product-card-details'>
                            <h5 className='title'>Smart Watch with Advanced Health Monitoring, Fitness Tracking</h5>
                            <h6 className='price mt-3'>$100</h6>
                            <div className='product-card-detail'>
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Type:</h5>
                                <p>Watch Accessories</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>SKU:</h5>
                                <p>SKU028</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Colors:</h5>
                                <Colors className="mb-0"/>
                            </div>
                            <div className='product-card-detail'>
                                <h5>Size:</h5>
                                <div className='d-flex gap-10'>
                                <p>S</p>
                                <p>M</p>
                                </div>
                                
                            </div>
                        </div>                                   
                    </div>
                </div>
                
           </div>
        </Container>
        </>
  )
}

export default ComapreProduct