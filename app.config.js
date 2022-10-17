let Config = {
  apiUrl: 'https://fakestoreapi.com',
};

if (process.env.APP_ENV === 'production') {
  Config.apiUrl = 'https://fakestoreapi.com';
} else if (process.env.APP_ENV === 'staging') {
  Config.apiUrl = 'https://fakestoreapi.com';
} else if (process.env.APP_ENV === 'development') {
  Config.apiUrl = 'https://fakestoreapi.com';
}

export default () => ({
  expo: {
    name: 'Come buy',
    slug: 'come-buy',
    version: '1.0.0',
    jsEngine: 'hermes',
    owner: 'shyweirdo',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    privacy: 'public',
    platforms: ['ios', 'android'],
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#CB77EA',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/67e75efb-78e7-4d84-92c7-dce85de10c4d',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#09163C',
      },
      softwareKeyboardLayoutMode: 'pan',
      package: 'com.etap.comeBuy',
    },
    description: 'A simple social e-commerce app',
    githubUrl: 'https://github.com/AdamuAbba/come_buy.git',
    extra: {
      eas: {
        projectId: '67e75efb-78e7-4d84-92c7-dce85de10c4d',
      },
      ...Config,
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
});
