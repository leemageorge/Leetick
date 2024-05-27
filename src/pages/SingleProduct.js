import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Colors from "../components/Colors"
import { TbGitCompare } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import watch from "../images/watch.jpg"
const SingleProduct = () => {
  const props =
  {
    width: 400,
    height: 500,
    zoomWidth: 580,
    zoomPosition: "original",
    img: "https://demo-digitic.myshopify.com/cdn/shop/products/21_884x.jpg?v=1655097438"
  };
  const [orderedProduct, setOrderedProduct] = useState(false)
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const closeModal=()=>{}
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Product Name"} />
      <Container class1='main-product-wrapper home-wrapper-2 py-3'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-product-image'>
              <div className="product-image">
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className='other-product-image d-flex flex-wrap gap-15'>
              <div><img src="	https://demo-digitic.myshopify.com/cdn/shop/products/21_01_884x.jpg?v=1655097450" alt="zoom" className='img-fluid ' /></div>
              <div><img src="https://demo-digitic.myshopify.com/cdn/shop/products/21-02_884x.jpg?v=1655097450" alt="zoom" className='img-fluid ' /></div>

            </div>
          </div>
          <div className='col-6'>
            <div className='main-product-detail'>
              <div className='border-bottom py-3'>
                <h3 className='title'>Smart Watch With Advanced Health Monitoring, Fitness Tracking</h3>
              </div>

              <div className='border-bottom py-3'>
                <p className='price'>$ 100</p>
                <div className='d-flex align-items-center gap-15'>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className='t-review mb-0'>( 2 reviews )</p>
                </div>
                <a href='#review' className='review-btn'>Write a review</a>
              </div>
              <div className='border-bottom py-3'>
                <div className='d-flex align-items-center gap-15 mb-3'>
                  <h3 className='review-head '>Brand :</h3>
                  <p className='review-text mb-0'> Havels</p>
                </div>
                <div className='d-flex align-items-center gap-15  mb-3'>
                  <h3 className='review-head'>Type :</h3>
                  <p className='review-text mb-0'>Watch</p>
                </div>
                <div className='d-flex align-items-center gap-15  mb-3'>
                  <h3 className='review-head'>Category :</h3>
                  <p className='review-text mb-0'>Watch</p>
                </div>

                <div className='d-flex align-items-center gap-15  mb-3'>
                  <h3 className='review-head'>Tag :</h3>
                  <p className='review-text mb-0'>Watch</p>
                </div>
                <div className='d-flex align-items-center gap-15  mb-3'>
                  <h3 className='review-head'>Availabilty :</h3>
                  <p className='review-text mb-0'>In Stock</p>
                </div>
                <div className='d-flex flex-column gap-15  mb-3'>
                  <h3 className='review-head'>Size :</h3>
                  <div className='d-flex flex-wrap gap-15'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>s</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>m</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>l</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>xl</span>
                  </div>
                </div>
                <div className='d-flex flex-column gap-15  mb-3'>
                  <h3 className='review-head'>Color :</h3>
                  <Colors />
                </div>
                <div className='d-flex align-items-center gap-15  mb-3'>
                  <h3 className='review-head'>Quantity :</h3>
                  <div className='d-flex align-items-center gap-30 ms-5'>
                    <div>
                      <input className='form-control' type='number' min={1} max={10} />
                    </div>
                    <button className='button border-0'>Add to Cart</button>
                    <button className='sign-up button'>Buy it now</button>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div className='d-flex align-items-center gap-15'>
                    <a href="/"><FaHeart className=' me-2' /> Add to Wishlist </a>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <a href="/"><TbGitCompare className='me-2' /> Add to Compare</a>
                  </div>

                </div>
                <div className='d-flex flex-column gap-15 my-3'>
                  <h3 className='review-head '>Shipping & Returns</h3>
                  <p className='review-text mb-0'>Free shipping and returns available on all orders!<br />
                    We ship all US domestic orders<b> within 5-10 business days! </b></p>
                </div>
                <div className='d-flex align-items-center gap-15 mb-3'>
                  <h3 className='review-head '>Product link:</h3>
                  <Link onClick={() => copyToClipboard("https://demo-digitic.myshopify.com/cdn/shop/products/21_884x.jpg?v=1655097438")}>
                    Copy product link
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
      <Container class1='description-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='bg-white p-3'>
              <h4>Description</h4>
              <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
                aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                alias consequatur aut perferendis doloribus asperiores repellat."
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='reviews-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h4 id="review">Reviews</h4>
            <div className='review-inner-wrapper'>
              <div className='review-head d-flex align-items-end justify-content-between'>
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 8 reviews</p>
                  </div>

                </div>
                {setOrderedProduct(!orderedProduct) && <div>
                  <a href='/' className='text-dark text-decoration-underline'>Write a review</a>
                </div>}
              </div>
              <div className='review-form py-4'>
                <h4>Write a review</h4>
                <form actions="" className='d-flex flex-column gap-15'>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea name="comments" placeholder='comments' rows="4" cols="30" className='w-100 form-control' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button  border-0'>Submit Review</button>
                  </div>


                </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                  <div className='d-flex align-items-center gap-10'>
                    <h4 className='mb-0'>Ewaan </h4>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>

                  <p className='mt-4'>It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here'</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
      <Container class1='popular-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex gap-10'>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <div 
      class="modal fade" 
      id="staticBackdrop" 
      data-bs-backdrop="static" 
      data-bs-keyboard="false" 
      tabindex="-1" 
      aria-labelledby="staticBackdropLabel" 
      aria-hidden="true"
      >

        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header py-0 border-0">
            
              <button 
              type="button"
              class="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"></button>
            </div>
            <div class="modal-body py-0">
             <div className='d-flex align-items-center'>
              <div className='flex-grow-1 w-50'>
                <img src={watch} alt="watch" className='img-fluid'/>
              </div>
              <div className='d-flex flex-column flex-grow-1 w-50'>
                  <h6 className='mb-3'>Apple Watch</h6>
                  <p className='mb-1'>Quantity: 1</p>
                  <p className='mb-1'>Size: s</p>
                  <p className='mb-1'>Color: #eaeaea</p>
              </div>
             </div>
            </div>
            <div class="modal-footer border-0 py-0 justify-content-center gap-10">
              <button 
              type="button" 
              className="button" 
              data-bs-dismiss="modal">View My Cart</button>
              <button 
              type="button" 
              class="button signup">Checkout
              </button>
            </div>
            <div className='d-flex justify-content-center py-3'>
                <Link 
                className='text-dark' 
                to="/product"
                onClick={()=>{closeModal()}}>
                  Continue to Shopping
                </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleProduct