import { __ModelPrural__Service } from "services/__ModelPrural__(camelCase)/__ModelPrural__(camelCase).service";
import { __ModelSingular__ } from "models/__ModelSingular__(camelCase).model";
import axios from 'axios';
import API__ModelSingular__Mapper from "mappers/api-__ModelSingular__(camelCase).mapper";
import { BASE_PROJECT_API_URL } from "tools/env/env-tool";

export class Axios__ModelPrural__Service implements __ModelPrural__Service {

  async getAll__ModelPrural__(): Promise<__ModelSingular__[]> {

    try {
      let response = await axios.get(BASE_PROJECT_API_URL + "/examples")
      let __ModelPrural__(camelCase) = response.data.map((data: any) => API__ModelSingular__Mapper.__ModelSingular__(camelCase)FromJSON(data))
      return __ModelPrural__(camelCase)
    } catch (error) {
      throw 'Unable to fetch __ModelPrural__(camelCase)'
    }
  }
}