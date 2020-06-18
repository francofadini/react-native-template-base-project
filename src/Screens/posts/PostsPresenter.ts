import { PostsService } from "services/posts/posts.service"
import { Post } from "models/post.model"

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
            startFetch(posts, 999999)
        }).catch((error) => {
            abortFetch()
        })
    }
}