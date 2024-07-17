// src/components/Home.js

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Welcome to the Investment Recommendation System</h1>
      </div>
      <section className="mb-5">
        <h2 className="text-primary">How the System Works</h2>
        <p className="lead">
          Our system helps you make informed investment decisions based on your spending habits. By tracking your spending patterns, we provide personalized investment recommendations to help you grow your wealth effectively.
        </p>
        <ul className="list-group">
          <li className="list-group-item">Record your spending through our secure platform.</li>
          <li className="list-group-item">Receive personalized investment recommendations based on your spending habits.</li>
          <li className="list-group-item">Monitor your investment performance through our interactive dashboard.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-primary">Terms and Conditions</h2>
        <p className="lead">Your privacy is important to us. Here is how we handle your data:</p>
        <ul className="list-group">
          <li className="list-group-item">We collect your spending data to provide personalized investment recommendations.</li>
          <li className="list-group-item">Your data is stored securely and is only used to enhance your experience with our system.</li>
          <li className="list-group-item">We do not share your data with third parties without your explicit consent.</li>
          <li className="list-group-item">You can request to delete your data at any time by contacting our support team.</li>
        </ul>
        <p className="mt-3">By using our system, you agree to these terms and conditions.</p>
      </section>
    </div>
  );
}

export default Home;
