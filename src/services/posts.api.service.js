import axios from "axios";

class PostsApi {

  static async getAllPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

export default PostsApi;
