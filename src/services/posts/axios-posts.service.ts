import { PostsService } from "services/posts/posts.service";
import { Post } from "models/post.model";
import axios from 'axios';
import APIJSONToModelMapper from "mappers/api-json-to-model.mapper";

export class AxiosPostsService implements PostsService {

  async getAllPosts(): Promise<Post[]> {

    try {
      let response = await axios.get("http://localhost:3000/api/examples")
      let posts = response.data.map((data: any) => APIJSONToModelMapper.postFromJSON(data))
      return posts
    } catch (error) {
      throw 'Unable to fetch posts'
    }
  }
}