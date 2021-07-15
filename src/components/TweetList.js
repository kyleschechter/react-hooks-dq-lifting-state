import React from "react";
import TweetItem from "./TweetItem";

function TweetList({ user }) {
  return (
    <div className="ui segment">
      <div className="ui feed">
        {user.tweets.map((tweet) => {
          return (
          <TweetItem
            key={tweet.id}
            // handleTweetLike={handleTweetLike}
            // handle={tweet.handle}
            photo={user.photo}
            tweet={tweet}
          />
          )
        })}
      </div>
    </div>
  );
}

export default TweetList;
