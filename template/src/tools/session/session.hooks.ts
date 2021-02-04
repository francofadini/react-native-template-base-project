import { useContext } from 'react';
import { SessionContext } from 'tools/session/session.context';
import { Session } from 'tools/session/session';
import { localStore } from 'tools/local-storage/local-storage';

export const SESSION_STORAGE_SESSION_KEY = 'SESSION_STORAGE_SESSION_KEY';

export type SessionHook = () => [
  Session,
  (session: Session) => void,
  () => void,
];

export const useLocalSession: SessionHook = (): [
  Session,
  (session: Session) => void,
  () => void,
] => {
  const { session, setSession } = useContext(SessionContext);

  const setSessionOnLocalStorage = (newSession: Session) => {
    localStore.save(SESSION_STORAGE_SESSION_KEY, newSession).finally();
    setSession(newSession);
  };

  const killSession = () => {
    localStore.delete(SESSION_STORAGE_SESSION_KEY).finally();
    setSession(new Session(''));
  };

  return [session, setSessionOnLocalStorage, killSession];
};
