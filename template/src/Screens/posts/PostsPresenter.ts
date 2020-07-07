import { PostsService } from "services/posts/posts.service"
import { Post } from "models/post.model"
import { LICPostProps } from 'components/LICPost';

export interface PostsView {

}

export default class PostsPresenter {
    private view: PostsView
    private postsService: PostsService

    constructor (view: PostsView, postsService: PostsService){
        this.view = view
        this.postsService = postsService
    }

    public onListFetch = (
        currentPage: number, 
        startFetch: (items: any[], pageLimit: number) => any, 
        abortFetch: () => void) => {
        
        this.postsService.getAllPosts()
        .then((posts) => {
            let postViewModels = posts.map((post) => this.mapPostToViewModel(post))
            startFetch(postViewModels, 999999)
        }).catch((error) => {
            abortFetch()
        })
    }

    private mapPostToViewModel(post: Post): LICPostProps {
        return {
            key: '1',
            title: post.title,
            body: post.body,
            imageURL: post.imageURL,
            onPress: ()=>{}
        }
    }
}