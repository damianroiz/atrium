import PageHeader from "../../../Components/PageHeader";
import { Link } from "react-router-dom";

const BlogMenu = () => {
    return (
      <header className="blog-header">
        <PageHeader title={"Blog"} path={"/"} link={"Home >"} />
        <nav className="blog-menu">
          <Link to={"/login"} className="blog-link">
            Login
          </Link>
          <Link to={"/register"} className="blog-link">
            Register
          </Link>
        </nav>
      </header>
    );
  };
  
  export default BlogMenu; 

