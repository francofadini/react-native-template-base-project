import { useLocalSession } from 'tools/session/session.hooks';
import { ApiPostsService } from 'services/posts/api-posts.service';
import { PostDto } from 'services/posts/dtos/post.dto';

export interface PostsService {
  getAllPosts(): Promise<PostDto[]>;
}

export const useAPIPostsService = (): PostsService => {
  const [session] = useLocalSession();
  return new ApiPostsService(session);
};
