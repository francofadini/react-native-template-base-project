import React from 'react';
import { Provider } from '@ant-design/react-native';
import theme from 'constants/theme.ant';
import esES from '@ant-design/react-native/lib/locale-provider/es_ES';

const UIProvider: React.FC<{}> = (props) => {
  return (
    <Provider theme={theme} locale={esES}>
      {props.children}
    </Provider>
  );
};

export default UIProvider;
