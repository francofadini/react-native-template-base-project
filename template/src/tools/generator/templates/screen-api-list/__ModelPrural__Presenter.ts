import { __ModelPrural__Service } from "services/__ModelPrural__(camelCase)/__ModelPrural__(camelCase).service"
import { __ModelSingular__ } from "models/__ModelSingular__(camelCase).model"
import { LIC__ModelSingular__Props } from 'components/LIC__ModelSingular__';

export interface __ModelPrural__View {

}

export default class __ModelPrural__Presenter {
    private view: __ModelPrural__View
    private __ModelPrural__(camelCase)Service: __ModelPrural__Service

    constructor (view: __ModelPrural__View, __ModelPrural__(camelCase)Service: __ModelPrural__Service){
        this.view = view
        this.__ModelPrural__(camelCase)Service = __ModelPrural__(camelCase)Service
    }

    public onListFetch = (
        currentPage: number, 
        startFetch: (items: any[], pageLimit: number) => any, 
        abortFetch: () => void) => {
        
        this.__ModelPrural__(camelCase)Service.getAll__ModelPrural__()
        .then((__ModelPrural__(camelCase)) => {
            let __ModelSingular__(camelCase)ViewModels = __ModelPrural__(camelCase).map((__ModelSingular__(camelCase)) => this.map__ModelSingular__ToViewModel(__ModelSingular__(camelCase)))
            startFetch(__ModelSingular__(camelCase)ViewModels, 999999)
        }).catch((error) => {
            abortFetch()
        })
    }

    private map__ModelSingular__ToViewModel(__ModelSingular__(camelCase): __ModelSingular__): LIC__ModelSingular__Props {
        return {
            key: '1',
            title: __ModelSingular__(camelCase).title,
            body: __ModelSingular__(camelCase).body,
            imageURL: __ModelSingular__(camelCase).imageURL,
            onPress: ()=>{}
        }
    }
}