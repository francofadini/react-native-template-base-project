export class Session {
  public accessToken?: string;
  public permissions: string[];

  constructor(accessToken?: string, permissions?: string[]) {
    this.accessToken = accessToken;
    this.permissions = permissions ?? [];
  }

  isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.indexOf(permission) !== -1;
  }
}
