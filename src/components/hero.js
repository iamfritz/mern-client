import React from "react";

import heroImage from "../assets/asset-1.png";

export default function Hero() {
  return (
    <div className="container hero">
      <div className="row align-items-center text-center text-md-left">
        <div className="col-lg-4">
          <h1 className="mb-3 display-3">Tell Your Story to the World</h1>
          <p>Join with us! Login or Register. Write your story and share !!</p>
        </div>
        <div className="col-lg-8">
          <img src={heroImage} className="img-fluid" alt="img" />
        </div>
      </div>
    </div>
  );
}
