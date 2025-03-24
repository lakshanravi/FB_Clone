import React from 'react'
import "./RightPane.css";

function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightpaneContainr">
        <div className="addContainer">
          <span className="sponsored">
            Sponsored
          </span>
          <img src="/images/3.jpeg" alt="" className="adImg" />
          <span className="addText">Order Your Food With Lakshan Food Delivery Service.We will provide your food to your door step in seconds.Order now ...!</span>
        </div>
        <div className="birthdayContainer">
          <img src="images/4.jpeg" alt="" className="birtthdayImg" />
          <span className="birthdaytext"><b>Kumar Sangakkara</b> and <b>2 others</b>having birthday today..!</span>
        </div>

      </div>
    </div>
  )
}

export default RightPane