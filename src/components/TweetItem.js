import React, { useState } from "react";

function TweetItem(props) {
  const [currentLikes,setCurrentLikes] = useState(props.tweet.favorite_count)
  const newLikes = () => {
    setCurrentLikes(currentLikes + 1)
  }
  return (
    <div className="event">
      <div className="label">
        <img alt={props.handle} src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={newLikes}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {currentLikes} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
