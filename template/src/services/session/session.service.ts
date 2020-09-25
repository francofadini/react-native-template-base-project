import { Session } from "models/session.model";

export interface SessionService {
  saveCurrentSession(session: Session): void;
  removeCurrentSession(): void;
  getCurrentSession(): Promise<Session>;
}