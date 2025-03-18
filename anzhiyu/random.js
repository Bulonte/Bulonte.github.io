var posts=["2025/03/17/算法/","2025/03/17/MySQL/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };