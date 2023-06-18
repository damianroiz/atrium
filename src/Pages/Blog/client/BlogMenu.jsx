import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const BlogMenu = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <nav className="blog-menu">
      {username && (
        <>
          <Link to="/Blog/create" className="blog-link">
            Create new post
          </Link>
          <a onClick={logout}>Logout ({username})</a>
        </>
      )}
      {!username && (
        <>
          <Link to="/Blog/login" className="blog-link">
            Login
          </Link>
          <Link to="/Blog/register" className="blog-link">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default BlogMenu;
