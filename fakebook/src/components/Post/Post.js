import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
       <div className="postTopLeft">
       <img src="/images/1.jpg" alt="" className="postImage" />
          <span className="postUserName">Ravindu Lakshan</span>
          <span className="postTime">5 mins ago</span>
       </div>
        </div>
        <div className="postCenter">
          <div className="postCaption">Hellow I am Chathumi</div>
          <img src="images/2.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="images/like.png" alt="" className="reactionPic" />
            <img src="images/heart.png" alt="" className="reactionPic" />
            <img src="images/haha.png" alt="" className="reactionPic" />
            <img src="images/care.jpg" alt="" className="reactionPic" />
            <span className="likeCount">Sarath and 13 others</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">5 comments</span>
           

          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
