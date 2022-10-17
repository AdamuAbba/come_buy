import * as Updates from 'expo-updates';

let Config = {
  apiUrl: 'https://fakestoreapi.com',
};

if (Updates.channel === 'production') {
  Config.apiUrl = 'https://fakestoreapi.com';
} else if (Updates.channel === 'staging') {
  Config.apiUrl = 'https://fakestoreapi.com';
} else if (Updates.channel === 'development') {
  Config.apiUrl = 'https://fakestoreapi.com';
}

export default Config;
