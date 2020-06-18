import { Post } from "models/post.model";

export default class APIJSONToModelMapper {

  static postFromJSON (json: any): Post {
    return new Post(
      json.name,
      json.photoURL
    )
  }
}