import {useEffect, useState} from "react";
import {Counter, ClassCounter, PostList, CreatePost, Sort, Filtration} from './components'
import {Button, Modal, Loader} from "./components/common";
import {useSortedAndFilteredPosts} from "./hooks/usePosts";
import PostsApi from "./services/posts.api.service";
import './App.css'
import {useFetching} from "./hooks/useFetching";

function App() {

  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostsApi.getAllPosts()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
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
      <hr className='separator'/>
      <Filtration
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      <Sort
        selectedSort={selectedSort}
        handleSortPosts={handleSortPosts}
      />
      {postError && <div>Some error happened!</div>}
      {isPostsLoading
        ? (
          <div className='loader_wrapper'><Loader /></div>
        ) : (
          sortedAndSearchedPosts.length !== 0
            ? (
              <PostList
                posts={sortedAndSearchedPosts}
                title='List of posts'
                handleDeletePost={handleDeletePost}
              />
            ) : (
              <h2 className={'noPosts'}>There isn't any posts here.</h2>
            ))}
    </div>
  );
}

export default App;
