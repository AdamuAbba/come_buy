import FeedCard from 'components/FeedCard';
import LoadingComp from 'components/LoadingComp';
import StatusComp from 'components/StatusComp';
import React from 'react';
import {FlatList, View} from 'react-native';
import {IFeedTabsScreenProps} from 'routes/FeedTabs/types';
import {useGetProductsQuery} from 'services/endpoints/products';
import {styles} from './FeedList.styles';

const _listFooterComp = () => {
  return <View style={styles.listFooter} />;
};

const FeedList = ({
  navigation,
}: IFeedTabsScreenProps<'main-feed-screen' | 'liked-feed-screen'>) => {
  const {data} = useGetProductsQuery({limit: 100});
  return (
    <FlatList
      data={data}
      keyExtractor={(item, _) => item.id.toString()}
      renderItem={({item}) => <FeedCard item={item} navigation={navigation} />}
      ListHeaderComponent={<StatusComp />}
      ListEmptyComponent={<LoadingComp />}
      ListFooterComponent={_listFooterComp}
      initialNumToRender={3}
    />
  );
};

export default FeedList;
