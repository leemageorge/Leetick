import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
   <BreadCrumb title={"Reset Password"} />
   <Container class1='login-wrapper home-wrapper-2 py-3'>
        <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p className='text-center mt-2 mb-3'>We Will send you an email to reset your password</p>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <CustomInput type="password" name="password" placeholder="Password" />
                                    <CustomInput type="password" name="confpassword" placeholder="Confirm Password" />
                                    
                                    <div>
                                        
                                        <div className='mt-3 d-flex flex-column align-items-center justify-content-center gap-10'>
                                        <button className='button border-0' >Submit</button>
                                     
                                           
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
        </div>      
    </Container>
    </>
  )
}

export default Resetpassword