export default function Post() {
    return (
        <div className="post">
        <div className="post-img">
          <img
            src="src/assets/images/people-jogging.jpg"
            alt="people jogging"
          />
        </div>
        <div className="post-preview">
          <h2>Benefits of jogging</h2>
          <span className="post-info">
            <a href="" className="author" >
              Hala Basily
            </a>
            <time>2023-01-06 16:45</time>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eos doloremque error blanditiis accusantium totam incidunt, ipsa
            unde provident excepturi sunt quam iusto a natus dignissimos, sed
            voluptatibus, numquam similique!
          </p>
        </div>
      </div>
    )
}