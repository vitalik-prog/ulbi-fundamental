import { Button } from '../common';
import styles from './styles.module.css';

const PostItem = (props) => {

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className={styles.post__btns}>
        <Button onClick={() => props.deletePost(props.post.id)}>Delete</Button>
      </div>
    </div>
  );
}

export default PostItem;
