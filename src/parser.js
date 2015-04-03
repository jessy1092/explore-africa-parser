"use strict";

import http from 'http';

let WEBSITE = 'http://api.tumblr.com';
let API_VERSION = 'v2';
let API_KEY = 'M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi';
let BLOG = 'exploreafrica-tw.tumblr.com';

class TumblrParser {

  getPostsData (startId, callback) {

    let URL = `${WEBSITE}/${API_VERSION}/blog/${BLOG}/posts/text?api_key=${API_KEY}&offset=${startId}`;

    http.get(URL, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        let data = JSON.parse(body);
        callback(data);
      });
    });
  }
}

export default TumblrParser;
