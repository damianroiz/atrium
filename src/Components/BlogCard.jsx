import styles from './BlogCard.module.css';
import { HiArrowRightCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function BlogCard({ img, title, tags, date, content }) {
  return (
    <div className={styles.blogCard}>
      <img src={img} alt={'blog image'} />
      <div className={styles.blogCard__info}>
        <h2 className={styles.blogCard__title}>
          <Link to="#">{title}</Link>
        </h2>
        <div className={styles.blogCard__tags}>
          {tags?.map((tagItem, index) => (
            <span key={index}>{tagItem}</span>
          ))}
        </div>
        <span className={styles.blogCard__date}>Published on {date}</span>
        <p>
          {content}
          {'...'}
        </p>
        <Link className={styles.more} to="#">
         <span>Read more</span><HiArrowRightCircle />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
