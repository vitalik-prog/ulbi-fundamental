import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import {useFetching} from "../../hooks/useFetching";
import PostsApi from "../../services/posts.api.service";
import {Loader} from "../common";

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostsApi.getById(params.id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
      <h1>You open post with id = {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
    </div>
  );
};

export default PostPage;