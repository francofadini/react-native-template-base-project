import React from 'react';
import { Provider } from '@ant-design/react-native';
import theme from './ant-design/theme';
import esES from './ant-design/es_locale';



const UIProvider: React.FC<{}> = (props) => {
  return (
    <Provider theme={theme} locale={esES}>
      {props.children}
    </Provider>)
}

export default UIProvider;