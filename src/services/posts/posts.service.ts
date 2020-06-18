import { Post } from "models/post.model";

export interface PostsService {
  getAllPosts(): Promise<Post[]>
}