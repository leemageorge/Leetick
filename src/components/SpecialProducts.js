import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProducts = () => {
  return (
    <div className='col-6 mb-3'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src='images/watch.jpg' className="img-fluid" alt='' />
          </div>
          <div className='special-prodcut-content'>
            <h6 className='brand'>Havels</h6>
            <h5 className='title'>Samsung Galaxy Note10+ Mobile Phone; Sim Free Smartphone</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className='price'>
              <span className='red-p'>$100</span>&nbsp;
              <strike>$200</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0'><b>5</b> Days</p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-1 bg-danger'>01</span>:
                <span className='badge rounded-circle p-1 bg-danger'>02</span>:
                <span className='badge rounded-circle p-1 bg-danger'>05</span>
              </div>
            </div>
            <div className='prod-count mt-3'>
              <p>Products: 5</p>
              <div className='prodress'>
                <div className="progress" role="progressbar" 
                aria-label="Basic example" 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100">
                <div className="progress-bar" style={{"width": "25%"}}></div>
                </div>
              </div>
            </div>
            <Link className='button mt-3'>Add to cart</Link>

          </div>


        </div>


      </div>
    </div>
  )
}

export default SpecialProducts