import { useState } from "react";
import { Counter, Input, ClassCounter, PostList } from './components'
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Post description 1'},
    {id: 2, title: 'JavaScript 2', body: 'Post description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Post description 3'}
  ])


  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <Input />
      <PostList posts={posts} title={'List of posts'} />
    </div>
  );
}

export default App;
