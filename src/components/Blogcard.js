import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' alt="blog" 
                className='img-fluid w-100'/>
            </div>
            <div className='blog-content'>
                <p className='date'>8 June, 2024</p>
                <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                <p className='desc'>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury –</p>
                <Link to="/blog/:id" className='button'>Read More</Link>
            </div>
        </div>
        
  )
}

export default Blogcard