import { SessionContext } from 'tools/session/session.context';
import React, { useState } from 'react';
import { plainToClass } from 'class-transformer';
import { SESSION_STORAGE_SESSION_KEY } from 'tools/session/session.hooks';
import { localStore } from 'tools/local-storage/local-storage';
import { Session } from 'tools/session/session';

const SessionProvider: React.FC = (props) => {
  const stored = localStore.get(SESSION_STORAGE_SESSION_KEY);
  const initialSession = stored
    ? plainToClass(Session, stored)
    : new Session('');
  const [session, setSession] = useState(initialSession);

  return (
    <SessionContext.Provider
      value={{ session: session, setSession: setSession }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
