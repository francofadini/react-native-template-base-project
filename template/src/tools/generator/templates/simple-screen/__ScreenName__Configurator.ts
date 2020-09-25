import __ScreenName__Presenter, { __ScreenName__View } from 'screens/__ScreenName__(camelCase)/__ScreenName__Presenter';

export default class __ScreenName__Configurator {
    static buildPresenter = (view: __ScreenName__View) => {
        return new __ScreenName__Presenter(view);
    }
}