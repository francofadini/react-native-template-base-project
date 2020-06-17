export interface PostsView {
    increaseCount(): void
}

export default class PostsPresenter {
    private view: PostsView

    constructor (view: PostsView){
        this.view = view
    }

    public onMainButtonPressed = () => {
        this.view.increaseCount()
    }
}