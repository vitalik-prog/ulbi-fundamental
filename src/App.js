import {useEffect, useState} from "react";
import {Counter, ClassCounter, PostList, CreatePost, Sort, Filtration} from './components'
import {Button, Modal, Loader, Pagination} from "./components/common";
import {useSortedAndFilteredPosts} from "./hooks/usePosts";
import PostsApi from "./services/posts.api.service";
import {useFetching} from "./hooks/useFetching";
import {getPagesCount} from "./helpers/getPagesCount";
import {usePagination} from "./hooks/usePagination";
import './App.css'

function App() {

  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limitOfPosts, setLimitOfPosts] = useState(10)
  const [page, setPage] = useState(1)
  const [paginationPages, setPaginationPages] = useState([])
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostsApi.getAllPosts(limitOfPosts, page)
    setPosts(response.data)
    const totalPostsCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalPostsCount, limitOfPosts))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const sortedAndSearchedPosts = useSortedAndFilteredPosts(posts, selectedSort, searchQuery)
  const pagesNumbers = usePagination(totalPages)
  if (pagesNumbers.length > 0) {
    setPaginationPages(pagesNumbers)
  }

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

  const goToPage = (pageNumber) => {
    setPage(pageNumber)
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
            <Pagination pagesNumbers={paginationPages} goToPage={goToPage} activePage={page} />
    </div>
  );
}

export default App;
