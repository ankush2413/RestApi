import React,{useState} from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { getJwtToken } from './utils/urls';
import Error from './common/error';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage] = useState('');

  const onClickSignIn = ()=>{
    getJwtToken(email,password)
    .then(response=>{
      console.log(response);
      const { access, refresh } = response.data;

      // Save tokens in localStorage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
  
      // Redirect to product page
      window.location.href = '/products';
    })
    .catch(err=>{
      setErrorMessage(err.response.data.detail);
      console.log("Errorr",err.response.data.detail);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    })

}
  return (
    <div>
     {errorMessage && <Error message={errorMessage}/>} 
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={e=>setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e=>setPassword(e.target.value)}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={onClickSignIn}>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
    </div>
  );
}

export default Login;