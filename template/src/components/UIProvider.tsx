import React from 'react';
import { Provider } from '@ant-design/react-native';
import theme from 'constants/theme.ant';
import esES from 'constants/locale.ant.es';



const UIProvider: React.FC<{}> = (props) => {
  return (
    <Provider theme={theme} locale={esES}>
      {props.children}
    </Provider>)
}

export default UIProvider;