import React from 'react';
import { Provider } from '@ant-design/react-native';
import theme from 'constants/ant.theme';
import esES from 'constants/ant.locale.es';



const UIProvider: React.FC<{}> = (props) => {
  return (
    <Provider theme={theme} locale={esES}>
      {props.children}
    </Provider>)
}

export default UIProvider;