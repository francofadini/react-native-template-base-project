import { __ModelSingular__ } from "models/__ModelSingular__(camelCase).model";

export default class API__ModelSingular__Mapper {

  static __ModelSingular__(camelCase)FromJSON (json: any): __ModelSingular__ {
    return new __ModelSingular__(
      json.id,
      json.title,
      json.body,
      json.imageURL,
    )
  }
}