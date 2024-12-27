function BlogCard() {
    return (
      <div className="post">
        <img
          className="postImg"
          src={
            "https://atriumphysiotherapy.com/wp-content/uploads/2024/02/Joint-Crack-1024x683.webp"
          }
          alt=""
        />
        <div className="postInfo">
          <h2 className="postTitle">
            <a href="/post/abc">
              Unraveling the Truth About Joint Cracking: Insights from
              Physiotherapy
            </a>
          </h2>
          <div className="post__cats">
            <a className="link" href="#">
              Fitness
            </a>
            <a className="link" href="#">
              Lifestyle
            </a>
          </div>
          <span className="post__date">Publised on Dec 24 2024</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
            <span>
              <a className="more" href="/abc">
                read more...
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }

  export default BlogCard;