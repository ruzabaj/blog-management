import React from 'react';
import Index from './index';
import Form from './Form';
import "../../sass/login.scss"

 const Login = () => {
  return (
    <div className='parent-container'>
        <div className='.children-container-one'>
            <Index/>
        </div>
        <div className='children-container-two'>
            <Form/>
        </div>
    </div>
  )
}
export default Login;