import React, {useState} from 'react'

import "./Main.css"

function Main() {
 const [count, setCount] = useState(0);
 const [state, setState] = useState(0);

 function incrment(){
     setCount(count + 1)
     setState(state + 200)
     
 }

 function decrement(){
     if(count > 0){

        setCount(count - 1)
        setState(state - 200)

     }
 }
    return (
        <div className="main">
            
 <div className="Cart-Container">
 <div className="Header">
 <h3 className="Heading">Shopping Cart</h3>
 <h5 className="Action">Remove all</h5>
 </div>

 <div className="Cart-Items">
 <div className="image-box">
 <img className="img1" src="https://curlytales.com/wp-content/uploads/2017/07/BerryWaffles4060-thumb-596x350-173990.jpg"  />
 </div>
 <div className="about">
 <h1 className="title">Waffle</h1>
 <h3 className="subtitle">250g</h3>
 <img className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png" />
 </div>
 <div className="counter"></div>
 <div className="prices"></div>
 </div>
<div className="wrap3">
 <div className="counter">
 <button onClick = {incrment} className="btn">+</button>
 <div className="count">{count}</div>
 <button onClick = {decrement} className="btn">-</button>
 </div>
</div>


<div className="prices">
 <div className="amount">₹200</div>
 <div className="save"><u>Save for later</u></div>
 <div className="remove"><u>Remove</u></div>
 </div>


 
 <div className="checkout">
 <div className="total">
 <div>
 <div className="Subtotal">Sub-Total</div>
 <div className="items">{count} item</div>
 </div>
 <div className="total-amount"> ₹{state}</div>
 </div>
 <button className="button">Checkout</button>
 </div>

 </div>

 
        </div>
    )
}

export default Main
