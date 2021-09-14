import styles from './styles.module.css';

const Post = () => {

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>1. Javascript</strong>
        <div>
          JavaScript - programming language 
        </div>
      </div>
      <div className={styles.post__btns}>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Post;
