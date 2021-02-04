import { PostsService } from 'services/posts/posts.service';
import { BASE_PROJECT_API_URL } from 'constants/env';
import { Session } from 'tools/session/session';
import { PostDto } from 'services/posts/dtos/post.dto';
import { plainToClass } from 'class-transformer';
import axios from 'axios';

export class ApiPostsService implements PostsService {
  constructor(private session: Session) {}
  async getAllPosts(): Promise<PostDto[]> {
    let response = await axios.get(BASE_PROJECT_API_URL + '/posts', {
      headers: { Authorization: 'Bearer ' + this.session.accessToken },
    });
    return response.data.map((data: any) => plainToClass(PostDto, data));
  }
}
