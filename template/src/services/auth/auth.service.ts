import { Session } from "models/session.model";

export interface AuthService {
  login(): Promise<Session>
  signup(): Promise<Session>
  logout(): void
}