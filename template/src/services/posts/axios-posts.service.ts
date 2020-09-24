import { PostsService } from "services/posts/posts.service";
import { Post } from "models/post.model";
import axios from 'axios';
import APIJSONToModelMapper from "mappers/api-json-to-model.mapper";
import { BASE_PROJECT_API_URL } from "tools/env/env-tool";

export class AxiosPostsService implements PostsService {

  async getAllPosts(): Promise<Post[]> {

    try {
      let response = await axios.get(BASE_PROJECT_API_URL + "/examples")
      let posts = response.data.map((data: any) => APIJSONToModelMapper.postFromJSON(data))
      return posts
    } catch (error) {
      throw 'Unable to fetch posts'
    }
  }
}