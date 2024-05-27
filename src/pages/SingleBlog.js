import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi"; 
import blog from "../images/blog-1.jpg"
import Container from '../components/Container';
const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic blog card"} />
            <BreadCrumb title={"Dynamic blog card"} />
            <Container class1='single-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card'>
                                <h3 className='filter-title mt-3'>Find By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Home</li>
                                        <li>Our Store</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='single-blog-card'>
                            <Link to="/blogs" className='d-flex align-items-center gap-10 mb-3'><HiOutlineArrowLeft className='fs-4'/>Go back to home</Link>
                                <h3 className='title mb-3'>
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                
                                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                                <p>
                                    You’re only as good as your last collection, 
                                    which is an enormous pressure. 
                                    I think there is something about luxury – 
                                    it’s not something people need, but it’s what they want. 
                                    It really pulls at their heart. I have a fantastic relationship
                                     with money.Scelerisque sociosqu ullamcorper urna nisl mollis 
                                     vestibulum pretium commodo inceptos cum condimentum placerat
                                      diam venenatis blandit hac eget dis lacus a parturient a 
                                      accumsan nisl ante vestibulum.
                                </p>
                            </div>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog