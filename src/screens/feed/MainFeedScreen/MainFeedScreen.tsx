import FeedList from 'components/FeedList';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {IFeedTabsScreenProps} from 'routes/FeedTabs/types';
import {styles} from './MainFeedScreen.styles';

const MainFeedScreen = ({
  navigation,
  route,
}: IFeedTabsScreenProps<'main-feed-screen'>): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <FeedList route={route} navigation={navigation} />
    </View>
  );
};

export default MainFeedScreen;
