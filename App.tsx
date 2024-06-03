import Login from './src/Login';
import {NativeBaseProvider, StatusBar} from 'native-base'

import { Temas } from './src/estilos/temas';

export default function App() {
  return (
    <NativeBaseProvider theme={Temas}>
      <StatusBar backgroundColor={Temas.colors.blue [800]}/>
      <Login />
    </NativeBaseProvider>
  );
}
