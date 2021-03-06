import React from 'react';
import {
  SessionContext,
  SessionContextInterface,
} from 'tools/session/session.context';
import { PrivateContentFragment } from 'fragments/private-content/private-content.fragment';

interface SecureCompoentProps {
  component: React.ReactNode;
  notAllowedComponent?: React.ReactNode;
  permission?: string;
}

const SecureComponent: React.FC<SecureCompoentProps> = (props) => {
  const NotAllowedComponent = props.notAllowedComponent ? (
    props.notAllowedComponent
  ) : (
    <PrivateContentFragment />
  );

  const renderComponent = (value: SessionContextInterface) => {
    if (!value.session.isLoggedIn()) {
      return NotAllowedComponent;
    }
    if (props.permission && !value.session.hasPermission(props.permission)) {
      return NotAllowedComponent;
    }
    return props.component;
  };

  return <SessionContext.Consumer>{renderComponent}</SessionContext.Consumer>;
};

export default SecureComponent;
