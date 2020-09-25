export interface __ScreenName__View {
    increaseCounter(): void
}

export default class __ScreenName__Presenter {
    private view: __ScreenName__View

    constructor (view: __ScreenName__View){
        this.view = view
    }

    public onUpButtonPressed = () => {
        this.view.increaseCounter()
    }
}