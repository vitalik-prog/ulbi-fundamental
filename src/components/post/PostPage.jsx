import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../../hooks/useFetching";
import PostsApi from "../../services/posts.api.service";
import {Loader} from "../common";
import styles from './styles.module.css';

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostsApi.getById(params.id)
    setPost(response.data)
  })

  const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostsApi.getCommentsByPostId(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById()
    fetchCommentsByPostId()
  }, [])

  return (
    <div>
      <h1>You open post with id = {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      {isCommentsLoading
        ? <Loader/>
        : (
          <div>
            <h3>Comments:</h3>
            {comments.map(comment =>
              <div className={styles.comment_row}>
                <h5>{comment.email}</h5>
                <p>{comment.body}</p>
              </div>
            )}
          </div>
        )
      }
    </div>
  );
};

export default PostPage;