import React from 'react';
import { Session } from 'models/session.model';

export interface SessionContextInterface {
  session: Session,
  setSession: (session: Session)=>void
}

export const SessionContext = React.createContext<SessionContextInterface>({
  session: new Session(), 
  setSession: ()=>{}
})