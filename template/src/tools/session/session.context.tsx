import React from 'react';
import { Session } from 'tools/session/session';

export interface SessionContextInterface {
  session: Session;
  setSession: (session: Session) => void;
}

export const SessionContext = React.createContext<SessionContextInterface>({
  session: new Session(),
  setSession: () => {},
});
