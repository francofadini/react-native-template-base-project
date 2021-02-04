import { UserService } from 'services/user/user.service';
import axios from 'axios';
import { Session } from 'tools/session/session';
import { BASE_PROJECT_AUTH0_DOMAIN } from 'constants/env';
import { UserDto } from 'services/user/dtos/user.dto';
import { plainToClass } from 'class-transformer';

export class Auth0UserService implements UserService {
  constructor(private session: Session) {}

  async getUserInfo(token?: string): Promise<UserDto> {
    let response = await axios.get(
      'https://' + BASE_PROJECT_AUTH0_DOMAIN + '/userinfo',
      {
        headers: {
          Authorization: 'Bearer ' + this.session.accessToken ?? token,
        },
      },
    );
    return plainToClass(UserDto, response.data);
  }
}
