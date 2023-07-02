import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="post-img">
        <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/+cover`} alt="" />
        </Link>
      </div>
      <div className="post-preview">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <span className="post-info">
          <a href="" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt, "MMM d, yyy HH:mm"))}</time>
        </span>
        <p>{summary}</p>
      </div>
    </div>
  );
}
