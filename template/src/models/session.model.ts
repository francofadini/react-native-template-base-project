export class Session {
  public accessToken?: string
  public permissions: string[]

  constructor (accessToken?: string, permissions?: string[]) {
    this.accessToken = accessToken
    this.permissions = permissions ?? []
  }

  isLogedIn(): boolean {
    if (this.accessToken) {return true}
    return false
  }

  hasPermission(permission: string): boolean {
    return this.permissions.indexOf(permission) !== -1
  }
}