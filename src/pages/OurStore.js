import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard"
import Colors from '../components/Colors';
import Container from '../components/Container';
const OurStore = () => {
    const [grid, setGrid] = useState(4)

    return (
        <div>
            <Meta title={"Our Store"} />
            <BreadCrumb title={"Our Store"} />
            <Container class1='filter-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className='sub-title'> Availabity</h5>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="" />
                                        <label className='form-check-label' htmlFor="">In stock</label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="" />
                                        <label className='form-check-label' htmlFor="" >Out of stock (1)</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingInput" placeholder="From" min={1} />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingInput" placeholder="To" min={1} />
                                        <label htmlFor="floatingInput">To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Colors</h5>

                                <div>
                                    <Colors />
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value="" id="" />
                                    <label className='form-check-label' htmlFor="">S (1)</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value="" id="" />
                                    <label className='form-check-label' htmlFor="" >M (2)</label>
                                </div>

                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product Tag</h3>
                                <div className='product-tags d-flex flex-wrap gap-10 align-items-center'>
                                    <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>HeadPhone</span>
                                    <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>laptop</span>
                                    <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Mobile</span>
                                    <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Tv</span>
                                    <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Watch</span>
                                    <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Accessories</span>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Random Products</h3>
                                <div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src='images/watch.jpg' alt="random" className='img-fluid' />
                                        </div>
                                        <div className='w-50'>
                                            <h5 className='title'>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p>$100</p>
                                        </div>
                                    </div>
                                    <hr className='w-60' />
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src='images/watch.jpg' alt="random" className='img-fluid' />
                                        </div>
                                        <div className='w-50'>
                                            <h5 className='title'>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p>$100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex align-items-center justify-content-between gap-10'>
                                    <div className='d-flex align-items-center gap-10'>
                                    <span style={{"width": "100px"}}>Sort By</span>
                                    <select className='form-control form-select' id="" defaultValue={'DEFAULT'}>
                                        <option value="manual">Featured</option>
                                        <option value="DEFAULT" >Best selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price, low to high</option>
                                        <option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>
                                    </select>
                                    </div>
                             
                                    <div className='d-flex align-items-center gap-10 grid'>
                                    <span className='total-products' >21 Products</span>
                                    <div className='d-flex align-items-center gap-10'>
                                        <img className="d-block img-fluid" src='images/gr4.svg' alt='grid'onClick={()=>{setGrid(3)}}/>
                                        <img className="d-block img-fluid" src='images/gr3.svg' alt='grid'onClick={()=>{setGrid(4)}}/>
                                        <img className="d-block img-fluid" src='images/gr2.svg' alt='grid'onClick={()=>{setGrid(6)}}/>
                                        <img className="d-block img-fluid" src='images/gr.svg' alt='grid' onClick={()=>{setGrid(12)}}/>
                                    </div>
                                      
                                    </div>
                                </div>
                              
                            </div>
                            <div className='product-list pb-5'>
                               <div className='d-flex flex-wrap gap-10'>
                                <ProductCard grid={grid} />
                               </div>
                            </div>
                        </div>
                </div>
            </Container>
           
        </div>
    )
}

export default OurStore