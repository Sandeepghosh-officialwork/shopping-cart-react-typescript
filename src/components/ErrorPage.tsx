import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage:React.FC = () => {
  return (
    <>
      <div className='container px-4 my-5 bg-light rounded-3 py-5 d-flex justify-content-center align-items-center'>
          <h1>Error : 404.<br />Page is not found!</h1>
      </div>
    </>
  )
}

export default ErrorPage;
