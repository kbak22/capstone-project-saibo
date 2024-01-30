import React from 'react';
import './ErrorPage.scss';
import { useNavigate } from 'react-router-dom';



function ErrorPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

  return (
    <div className="errorpage">
       <h2 className="errorpage-text">Image not available or format not recognized. Return to home page and try again.</h2>
       <button className="errorpage-button" onClick={handleClick}>Return to Home</button>
    </div>
  );
}

export default ErrorPage;