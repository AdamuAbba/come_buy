import * as Location from 'expo-location';
import {showMessage} from 'react-native-flash-message';
import {errorConfig, successConfig} from 'utils/constants';
var geodist = require('geodist');

/**
 *
 *
 * @param {string} image
 * @return {*} returns loaded image
 */

const getImage = (image: string) => {
  switch (image) {
    case 'bag.jpg':
      return require('assets/images/products/bag.jpg');
    case 'a_shirt.jpg':
      return require('assets/images/products/a_shirt.jpg');
    case 'brown_jacket.jpg':
      return require('assets/images/products/brown_jacket.jpg');
    case 'gray_shirt.jpg':
      return require('assets/images/products/gray_shirt.jpg');
    case 'dragon_bracelet.jpg':
      return require('assets/images/products/dragon_bracelet.jpg');
    case 'silver_ring.jpg':
      return require('assets/images/products/silver_ring.jpg');
    case 'diamond_ring.jpg':
      return require('assets/images/products/diamond_ring.jpg');
    case 'gold_rings.jpg':
      return require('assets/images/products/gold_rings.jpg');
    case 'hdd.jpg':
      return require('assets/images/products/hdd.jpg');
    case 'ssd.jpg':
      return require('assets/images/products/ssd.jpg');
    case 'another_ssd.jpg':
      return require('assets/images/products/another_ssd.jpg');
    case 'literally_another_hdd.jpg':
      return require('assets/images/products/literally_another_hdd.jpg');
    case 'accer_tv.jpg':
      return require('assets/images/products/accer_tv.jpg');
    case 'samsung_tv.jpg':
      return require('assets/images/products/samsung_tv.jpg');
    case 'purple_cardigan.jpg':
      return require('assets/images/products/purple_cardigan.jpg');
    case 'blue_cardigan.jpg':
      return require('assets/images/products/blue_cardigan.jpg');
    case 'white_female_dress.jpg':
      return require('assets/images/products/white_female_dress.jpg');
    case 'red_female_dress.jpg':
      return require('assets/images/products/red_female_dress.jpg');
    case 'more_female_stuff.jpg':
      return require('assets/images/products/more_female_stuff.jpg');
    default:
      return require('assets/images/products/more_female_stuff.jpg');
  }
};

/**
 * @description the function requests for device location
 * permission and if granted uses the geodist package to
 * calculate the distance between the users coordinates and the assumed fixed constant
 * @link https://www.npmjs.com/package/geodist
 * @return {*}  {Promise<void>}
 */
const validateLocation = async (): Promise<void> => {
  try {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      showMessage({
        ...errorConfig,
        description: 'Permission to access location was denied \n\nTap Me 👆',
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const userCords = {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    };
    const fixedCords = {
      lat: 6.4253,
      lon: 3.4095,
    };
    var distanceDifference = geodist(fixedCords, userCords, {
      unit: 'meters',
    });
    if (distanceDifference > 5000) {
      showMessage({
        ...errorConfig,
        description: `Order was not placed because you are in ${distanceDifference} meters away \n\nTap Me 👆`,
      });
    }
    if (distanceDifference < 5000) {
      showMessage({
        ...successConfig,
        description: `Your order has been placed since you are in ${distanceDifference} meters away \n\nTap Me 👆`,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      showMessage({...errorConfig, message: `${error.message} \n\nTap Me 👆`});
    }
  }
};

export {getImage, validateLocation};
