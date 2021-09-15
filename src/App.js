import {useMemo, useState} from "react";
import {Counter, ClassCounter, PostList, CreatePost, Sort, Filtration} from './components'
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 3', body: 'Post description 1'},
    {id: 2, title: 'JavaScript 2', body: 'Post description 2'},
    {id: 3, title: 'JavaScript 1', body: 'Post description 3'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      const copiedPosts = [...posts];
      return copiedPosts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const handleAddPost = (postData) => {
    setPosts([...posts, {id: posts.length + 1, ...postData}])
  }

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  const handleSortPosts = (e) => {
    setSelectedSort(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <CreatePost addNewPost={handleAddPost}/>
      <hr className={'separator'}/>
      <Filtration
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      <Sort
        selectedSort={selectedSort}
        handleSortPosts={handleSortPosts}
      />
      {sortedAndSearchedPosts.length !== 0
        ? (
          <PostList
            posts={sortedAndSearchedPosts}
            title={'List of posts'}
            handleDeletePost={handleDeletePost}
          />
        ) : (
          <h2 className={'noPosts'}>There isn't any posts here.</h2>
        )}
    </div>
  );
}

export default App;
