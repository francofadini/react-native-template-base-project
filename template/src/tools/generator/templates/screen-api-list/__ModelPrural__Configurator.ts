import __ModelPrural__Presenter, { __ModelPrural__View } from 'screens/__ModelPrural__(camelCase)/__ModelPrural__Presenter';
import { Axios__ModelPrural__Service } from 'services/__ModelPrural__(camelCase)/axios-__ModelPrural__(camelCase).service';

export default class __ModelPrural__Configurator {
    static buildPresenter = (view: __ModelPrural__View) => {
        let __ModelPrural__(camelCase)Service = new Axios__ModelPrural__Service()
        return new __ModelPrural__Presenter(view, __ModelPrural__(camelCase)Service);
    }
}