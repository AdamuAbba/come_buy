import FeedCard from 'components/FeedCard';
import {selectLikedFeed} from 'features/feed';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useTheme, Text, Surface} from 'react-native-paper';
import {IFeedTabsScreenProps} from 'routes/FeedTabs/types';
import {useAppSelector} from 'utils/hooks';
import {styles} from './LikedFeedScreen.styles';
import LottieView from 'lottie-react-native';

const LikedFeedScreen = ({
  navigation,
}: IFeedTabsScreenProps<'liked-feed-screen'>): JSX.Element => {
  const {colors} = useTheme();
  const likedFeed = useAppSelector(selectLikedFeed);
  const _listHeaderComp = () => {
    return (
      <Surface style={styles.likedPostView}>
        <Text>Liked posts</Text>
      </Surface>
    );
  };

  const _listFooterComp = (): JSX.Element => {
    return <View style={styles.listFooter} />;
  };

  const _listEmptyComp = (): JSX.Element => {
    return (
      <View style={styles.lottieContainer}>
        <LottieView
          autoPlay={true}
          loop={true}
          style={styles.lottie}
          source={require('assets/images/no_review.json')}
        />
        <Surface style={styles.emptyCompTextView}>
          <Text>Liked posts will appear here</Text>
        </Surface>
      </View>
    );
  };

  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <FlatList
        data={likedFeed}
        keyExtractor={(item, _) => item.id.toString()}
        renderItem={({item}) => (
          <FeedCard navigation={navigation} item={item} />
        )}
        ListHeaderComponent={_listHeaderComp}
        ListFooterComponent={_listFooterComp}
        ListEmptyComponent={_listEmptyComp}
      />
    </View>
  );
};

export default LikedFeedScreen;
