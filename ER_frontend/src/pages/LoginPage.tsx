import React from 'react';
import LoginForm from '../components/Form/LoginForm';
// import AuthLayout from '../components/layouts/AuthLayout';

const Login: React.FC = () => {
  return (
    <>
     {/* <AuthLayout>  */}
      <div className='flex justify-center items-center h-fit my-8'>
      <LoginForm />
      </div>
    {/* </AuthLayout> */}
      
    </>
    
  );
};

export default Login;
