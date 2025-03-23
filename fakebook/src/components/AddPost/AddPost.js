import React from "react";
import "./AddPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';


function AddPost() {
  return (
    <div className="AddPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input
            type="text"
            placeholder="Whats in your mind..?"
            className="addPostInput"
          />
        </div>
        <hr className="addPostHr" />

        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
              <span className="addPostOptionTrext">Add Photo/Vedio</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon htmlColor ="red" className="addPhoto" />
              <span className="addPostOptionTrext">Add Location</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon htmlColor="blue" className="addPhoto" />
              <span className="addPostOptionTrext">Add Tag</span>
            </div>
            <div className="addPostOption">
              <LiveTvIcon htmlColor="tomato" className="addPhoto" />
              <span className="addPostOptionTrext">Go Live</span>
            </div>
          </div>
          <button className="addPostButton">Post</button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
