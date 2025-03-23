import React from 'react'
import "./PostPane.css";
import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';

function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost/>
      <Post/>
    </div>
  )
}

export default PostPane