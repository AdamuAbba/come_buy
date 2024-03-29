import {DefaultTheme, configureFonts} from 'react-native-paper';
import {fontConfig} from './fonts';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    success: '#4ECDC4',
    primary: '#CB77EA',
    onPrimary: '#ffff',
    surface: '#09163C',
    tertiary: '#474076',
    accent: '#1f1f1f',
    background: '#fff',
    text: '#fff',
    placeholder: '#fff',
  },
  fonts: configureFonts(fontConfig),
};
