"use strict";

import TumblrParser   from './src/parser';
import PostStore      from './src/store';
import {EventEmitter} from 'events';

let tumblrParser = new TumblrParser();
let postStore    = new PostStore();

let postHandler = new EventEmitter()

function updatePosts(startId) {
  tumblrParser.getPostsData(startId, (data) => {

    let totalPostsCnt, currentPostsCnt;

    postStore.addPosts(data['response']);

    totalPostsCnt = postStore.getTotalCnt();
    currentPostsCnt = postStore.getCurrentCnt();

    if (totalPostsCnt < currentPostsCnt) {
      postHandler.emit('update_posts', totalPostsCnt);
    } else {
      let totalPosts = postStore.getAllPost();
      console.log(totalPosts);
    }
  });
};

postHandler.on('update_posts', updatePosts);

updatePosts(0);
