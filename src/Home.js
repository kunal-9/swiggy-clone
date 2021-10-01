import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
            <div className="wrap">
            <img className="home_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kejs6buff87exc7fdzhz"/>
        <div className="txt">
        <div className="home_title">The Belgian Waffle Co.</div>
        
        <div className ="title_1"><span className ="blockr">Restaurant Unserviceable</span><span>    Desserts, Beverages</span></div>
        <div className="block2">KIlpauk, Kilpauk</div>
        </div>
        
        </div>
        <div className="bighead">
        <div className="txt9">OFFER</div>
        <div className="txt10">20% off up to ₹50 | Use code 
        TRYNEW</div>
        </div>
        
        </div>
  )
}

export default Home
