import {TransitionGroup, CSSTransition} from "react-transition-group";
import PostItem from './PostItem';
import styles from './styles.module.css';
import './styles.css';

const PostList = ({posts, title, handleDeletePost}) => {
  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
      <TransitionGroup className="todo-list">
        {posts.map(post =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem
              post={post}
              deletePost={handleDeletePost}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}

export default PostList;
