var posts=["2025/03/17/MySQL/","2025/03/17/算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };