import Post from "./Post";
import { useEffect } from "react";
import { useState } from "react";

function BlogIndex() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <main className="blog-home">
      {posts.length > 0 && posts.map((post) => <Post {...posts} />)}
    </main>
  );
}

export default BlogIndex;
