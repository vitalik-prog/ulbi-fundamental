import {useEffect, useState} from "react";
import {Counter, ClassCounter, PostList, CreatePost, Sort, Filtration} from './components'
import {Button, Modal} from "./components/common";
import {useSortedAndFilteredPosts} from "./hooks/usePosts";
import PostsApi from "./services/posts.api.service";
import './App.css'

function App() {

  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(async () => {
    const posts = await PostsApi.getAllPosts()
    setPosts(posts)
  }, [])

  const sortedAndSearchedPosts = useSortedAndFilteredPosts(posts, selectedSort, searchQuery)

  const handleAddPost = (postData) => {
    setPosts([...posts, {id: posts.length + 1, ...postData}])
    handleModalOpen()
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

  const handleModalOpen = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <Button
        onClick={handleModalOpen}
      >
        Add post
      </Button>
      <Modal
        visible={isModalVisible}
        closeModal={handleModalOpen}
      >
        <CreatePost addNewPost={handleAddPost}/>
      </Modal>
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
