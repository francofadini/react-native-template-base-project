import { SessionContext } from "tools/session/session.context";
import { Session } from "models/session.model";
import React, { useState } from "react";

interface SessionProviderProps {

}

const SessionProvider: React.FC<SessionProviderProps> = (props) => {

  const updateSession = (session: Session) => {
    setSession(session)
  }

  // Component State
  const [session, setSession] = useState(new Session());

  return (
    <SessionContext.Provider value={{session: session, setSession: updateSession}}>
      {props.children} 
    </SessionContext.Provider>)
}

export default SessionProvider;