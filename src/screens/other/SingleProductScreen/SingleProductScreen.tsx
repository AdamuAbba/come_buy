import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {
  Colors,
  List,
  Paragraph,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import {IRootStackScreenProps} from 'routes/RootStack/types';
import {styles} from './SingleProductScreen.style';
import {MaterialCommunityIcons} from '@expo/vector-icons';
const SingleProductScreen = ({
  route,
}: IRootStackScreenProps<'single-product-screen'>): JSX.Element => {
  const {category, description, id, image, price, title} =
    route.params?.product;

  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <ScrollView>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: image}}
        />
        <Surface style={styles.titleView}>
          <View style={styles.listView}>
            <MaterialCommunityIcons
              name="tshirt-crew"
              size={25}
              color={colors.primary}
              style={styles.listIcon}
            />
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.listView}>
            <MaterialCommunityIcons
              name="shopping"
              size={25}
              color={colors.primary}
              style={styles.listIcon}
            />
            <Text>{category}</Text>
          </View>
          <View style={styles.listView}>
            <MaterialCommunityIcons
              name="cash"
              size={25}
              color={colors.primary}
              style={styles.listIcon}
            />
            <Text>₦ {price}</Text>
          </View>
        </Surface>
        <Surface style={styles.descriptionView}>
          <Text>Details :</Text>
          <Paragraph style={styles.paragraphText}>{description}</Paragraph>
        </Surface>
      </ScrollView>
    </View>
  );
};

export default SingleProductScreen;
