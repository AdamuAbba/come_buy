import {theme} from 'configs/themeConfig';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import store from 'features/store';
import React, {useEffect, useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import RootStack from 'routes/RootStack';

const App = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState(false);

  const fontConfig = {
    'Quicksand-regular': require('./src/assets/fonts/Quicksand_regular.ttf'),
    'Quicksand-bold': require('./src/assets/fonts/Quicksand_bold.ttf'),
    'Quicksand-medium': require('./src/assets/fonts/Quicksand_medium.ttf'),
  };

  const prepareApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(fontConfig);
    } catch (error) {
      console.warn(error);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    prepareApp();
  }, []);

  if (!appIsReady) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <RootStack />
        </PaperProvider>
        <FlashMessage position="top" />
      </StoreProvider>
    );
  }
};

export default App;
