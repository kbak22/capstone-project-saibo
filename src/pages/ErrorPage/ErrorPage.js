import React from 'react';
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <div className="errorpage">
       <h2 className="errorpage-text">Image not available or format not recognized. Return to home page and try again.</h2>
       <button className="errorpage-button" onClick={() => window.location.href = "/"}>Return to Home</button>
    </div>
  );
}

export default ErrorPage;