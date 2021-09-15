import PostItem from './PostItem';
import styles from './styles.module.css';

const PostList = ({posts, title, handleDeletePost}) => {
  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
      {posts.map(post =>
        <PostItem
          post={post}
          key={post.id}
          deletePost={handleDeletePost}
        />
      )}
    </>
  );
}

export default PostList;
