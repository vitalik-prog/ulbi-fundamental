import { useState } from 'react';
import { Button, Input } from '../common';

const CreatePost = ({ addNewPost }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value })
  }

  const handleBodyChange = (e) => {
    setPost({ ...post, body: e.target.value })
  }

  const handleAddNewPost = (e) => {
    e.preventDefault();
    addNewPost ({ title: post.title, body: post.body })
    setPost({ title: '', body: '' })
  }

  return (
    <>
      <form>
        <Input 
          value={post.title} 
          type='text' 
          placeholder='Post name'
          onChange={handleTitleChange}
        />
        <Input 
          value={post.body} 
          type='text' 
          placeholder='Post description' 
          onChange={handleBodyChange}
        />
        <Button onClick={handleAddNewPost}>Submit</Button>
      </form>
    </>
  );
}

export default CreatePost;
