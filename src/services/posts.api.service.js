import axios from "axios";

class PostsApi {

  static async getAllPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response.data
  }
}

export default PostsApi;
