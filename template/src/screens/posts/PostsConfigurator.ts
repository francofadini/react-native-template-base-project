import PostsPresenter, { PostsView } from 'screens/posts/PostsPresenter';
import { AxiosPostsService } from 'services/posts/axios-posts.service';

export default class PostsConfigurator {
    static buildPresenter = (view: PostsView) => {
        let postsService = new AxiosPostsService()
        return new PostsPresenter(view, postsService);
    }
}