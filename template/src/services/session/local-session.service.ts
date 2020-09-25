import { Session } from 'models/session.model';
import { SessionService } from 'services/session/session.service';
import { localStore } from 'tools/local-storage/local-storage';

export const CURRENT_SESSION_KEY = "CURRENT_SESSION";

export class LocalSessionService implements SessionService {

  private setSession?: (session: Session) => void

  constructor (setSession?: (session: Session) => void) {
    this.setSession = setSession
  }

  saveCurrentSession = async (session: Session) => {
    if (!this.setSession) {throw 'session context not set.'}
    await localStore.delete(CURRENT_SESSION_KEY)
    await localStore.save(CURRENT_SESSION_KEY, session)
    this.setSession(session)
  }

  removeCurrentSession = async () => {
    if (!this.setSession) {throw 'session context not set.'}
    await localStore.delete(CURRENT_SESSION_KEY)
    this.setSession(new Session())
  }

  getCurrentSession = () => {
    return localStore.get(CURRENT_SESSION_KEY)
  }
}