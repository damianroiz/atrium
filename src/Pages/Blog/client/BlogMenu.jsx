import { Link } from "react-router-dom";

const BlogMenu = () => {
  return (
      <nav className="blog-menu">
        <Link to="/login" className="blog-link">
          Login
        </Link>
        <Link to="/register" className="blog-link">
          Register
        </Link>
      </nav>
  );
};

export default BlogMenu;
