import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wish from '../images/wish.svg'
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-2.avif"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = ({grid}) => {
  const location = useLocation()

  return (
   <>
    <div className={`${location.pathname = "./store" ? `gr-${grid}`: "col-3"}`}>
      <Link to="/product/:id" className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
         <button className='border-0 bg-transparent'>
          <img src={wish} alt='wish' />
         </button>
        </div>

        <div className='product-img'>
          <img src={watch} className='img-fluid' alt="product images" />
          <img src={watch2} className='img-fluid' alt="product images" />
        </div>
        <div className="product-details" >
          <h6 className='brand'>Havells</h6>
          <h5 className='title'>
            Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
          <p className='price'>$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-10'>
            <button className='border-0 bg-transparent'>
              <img src={prodcompare} alt='compare'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src={view} alt='view'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src={addcart} alt='add cart'/>
            </button>
          </div>
        </div>
      
      </Link>
    </div>
    <div className={`${location.pathname = "./store" ? `gr-${grid}`: "col-3"}`}>
      <Link to="/product/:id" className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
         <button className='border-0 bg-transparent'>
          <img src={wish} alt='' />
         </button>
        </div>
        <div className='product-img'>
          <img src={watch} className='img-fluid' alt="product images" />
          <img src={watch2} className='img-fluid' alt="product images" />
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havells</h6>
          <h5 className='title'>
            Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>$100</p>
          <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-10'>
            <button className='border-0 bg-transparent'>
              <img src={prodcompare} alt='compare'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src={view} alt='view'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src={addcart} alt='add cart'/>
            </button>
          </div>
        </div>
      </Link>
    </div>
   </>
  )
}

export default ProductCard