import { ProfileService } from "services/profile/profile.service";
import { User } from "models/user.model";
import { SessionService } from "services/session/session.service";
import axios from 'axios';
import { BASE_PROJECT_AUTH0_DOMAIN } from "tools/env/env-tool";

export class Auth0ProfileService implements ProfileService {

  private sessionService: SessionService

  constructor(sessionService: SessionService) {
    this.sessionService = sessionService
  }

  async getUserInfo(): Promise<User> {
    let session = await this.sessionService.getCurrentSession()
    let userInfoData = await axios.get("https://"+BASE_PROJECT_AUTH0_DOMAIN+"/userinfo", {headers:{ 'Authorization' : "Bearer " + session.accessToken}})
    let userInfo = userInfoData.data
    let user = new User(userInfo.name,userInfo.email)
    return user
  }
}