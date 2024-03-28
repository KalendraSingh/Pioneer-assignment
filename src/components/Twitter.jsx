import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Twitter = () => {
  return (
    <div style={{ height: '200px',overflowY: 'auto' }}>
      <TwitterTweetEmbed
        tweetId={'1772642404736127111'}
      />
    </div>
  );
};

export default Twitter;
