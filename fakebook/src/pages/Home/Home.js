import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'
import "./Home.css";
function Home() {
  return (
 <>
    <Navbar/>
    <div className="bottomContainer">
    <LeftPane/>
    <PostPane/>
    <RightPane/>

    </div>
    
    </> 
  )
}

export default Home