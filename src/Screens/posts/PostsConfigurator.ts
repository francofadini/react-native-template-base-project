import PostsPresenter, { PostsView } from 'screens/posts/PostsPresenter';

export default class PostsConfigurator {
    static buildPresenter = (view: PostsView) => {
        return new PostsPresenter(view);
    }
}