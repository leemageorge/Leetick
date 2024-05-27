import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Blogcard from '../components/Blogcard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from "../components/SpecialProducts"
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img className='img-fluid rounded-3' src="images/main-banner-1.jpg" alt="main-banner" />
                <div className='main-banner-content position-absolute'>
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h4>iPad S13+ Pro.</h4>
                  <p>From $999.00 or $41.62/mo. <br />for 24 mo. Footnote*</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 align-items-center justify-content-between'>
                <div className='small-banner position-relative'>
                  <img src="/images/catbanner-01.jpg" alt="small-banner" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h5>Best Sale</h5>
                    <h4>Laptops Max</h4>
                    <p>From $1699.00 or $64.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="/images/catbanner-02.jpg" alt="small-banner" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h5>New Arrival</h5>
                    <h4>Buy Ipad Air</h4>
                    <p>From $49.91 or $12/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="/images/catbanner-03.jpg" alt="small-banner" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h5>15% off</h5>
                    <h4>Smart watch 7</h4>
                    <p>Shop the latest band styles and colors.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="/images/catbanner-04.jpg" alt="small-banner" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h5>Free engraving</h5>
                    <h4>Airpods max</h4>
                    <p>High fidility palyabck & ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
     <div className='row'>
            <div className='col-12'>
              <div className=' services d-flex justify-content-between align-items-center'>
                {services?.map((service,i)=>{
                  return(
                    <div className='d-flex align-items-center gap-15' key={i}>
                    <img src={service.image} alt="Service-" />
                    <div>
                      <h6>{service.tagline}</h6>
                      <p className='mb-0'>{service.title}</p>
                    </div>
                  </div>
                  )
                })}
          
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap align-items-center justify-content-between gap-15'>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Computers and Laptops</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Smart watches</h6>
                    <p>13 Item</p>
                  </div>
                  <img src="images/swatch.avif" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/music.webp" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Headphomes</h6>
                    <p>6 Item</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>8 Item</p>
                  </div>
                  <img src="images/speaker.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Accessories</h6>
                    <p>14 Item</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="featured-wrapper home-wrapper-2 py-5">
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Featured Collections
              </h3>
            </div>
            <div className='row'>
          <div className='d-flex gap-10'>
          <ProductCard />
          <ProductCard />
          </div>
          </div>
          </div>
    </Container>
    <Container class1="famous-wrapper home-wrapper-2 py-5">
   <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-1.webp' alt='famous' className='img-fluid' />
                <div className='famous-card-content position-absolute'>
                  <h5 className='text-white '>big screen</h5>
                  <h6 className='text-white'>Smart Watch Series 7</h6>
                  <p className='text-white'>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-2.webp' alt='famous' className='img-fluid' />
                <div className='famous-card-content position-absolute'>
                  <h5>Studio Display</h5>
                  <h6>600 nits of brightness.</h6>
                  <p>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-3.webp' alt='famous' className='img-fluid' />
                <div className='famous-card-content position-absolute'>
                  <h5 >smartphones</h5>
                  <h6 >Smartphone 13 Pro.</h6>
                  <p >Now in Green. From $999.00 or $41.62/mo.
                    for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-4.webp' alt='famous' className='img-fluid' />
                <div className='famous-card-content position-absolute'>
                  <h5>home speakers</h5>
                  <h6>Room-filling sound.</h6>
                  <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>           
    </Container>
     <Container class1="special-wrapper home-wrapper-2 py-5">
     <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>   
          <div className='row'>
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>      
     </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
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
      <Container class1="marquee-wrapper home-wrapper-2 py-5">
      <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
     <Container class1="blog-wrapper home-wrapper-2 py-5">
     <div className='row'>
            <div className='col-12'>
              <h3 className='section-heaing'>Our Latest News</h3>
            </div>
            </div>
            
            <div className='row'>
            <div className='col-3'>
            <Blogcard />
            </div>
            <div className='col-3'>
            <Blogcard />
            </div>
            <div className='col-3'>
            <Blogcard />
            </div>
            <div className='col-3'>
            <Blogcard />
            </div>
            </div>
     </Container>
 
    </>

  )
}

export default Home