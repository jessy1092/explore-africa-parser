"use strict";

class PostStore {

  constructor() {
    this.initPosts();
  }

  initPosts() {
    this._totalCnt   = 0;
    this._currentCnt = 0;
    this._updating   = false;
    this._posts      = [];
  }

  clearPosts() {
    this.initPosts();
  }

  getAllPost() {
    return this._posts;
  }

  checkUpdating() {
    return this._updating;
  }

  getTotalCnt() {
    return this._totalCnt;
  }

  getCurrentCnt() {
    return this._currentCnt;
  }

  addPosts(data) {
    this._posts = this._posts.concat(data['posts']);

    this._totalCnt   += data['total_posts'];
    this._currentCnt = data['blog']['posts'];

    if (this._totalCnt < this._currentCnt) {
      this._updating = true;
    } else {
      this._updating = false;
    }
  }
}

export default PostStore;
