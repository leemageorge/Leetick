import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
const Login = () => {
    return (
        <>
            <Meta title={"Account"} />
            <BreadCrumb title={"Account"} />
            <Container class1='login-wrapper home-wrapper-2 py-3'>
                <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <CustomInput type="email" name="email" placeholder="Email" />
                                    <CustomInput type="password" name="password" placeholder="Password" />           
                                    <div>
                                        <Link to="/forgot-password" className='btn-title' >Forgot Password?</Link>
                                        <div className='mt-3 d-flex align-items-center justify-content-center gap-10'>
                                        <button className='button border-0'>Login</button>
                                        <Link to="/signup" className='button sign-up'>Sign-up</Link>
                                           
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

export default Login