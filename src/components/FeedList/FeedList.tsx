import FeedCard from 'components/FeedCard';
import LoadingComp from 'components/LoadingComp';
import StatusComp from 'components/StatusComp';
import React, {useCallback} from 'react';
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
  const {data, isFetching, refetch} = useGetProductsQuery({limit: 100});

  const OnRefresh = useCallback(() => {
    refetch();
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      refreshing={isFetching}
      onRefresh={OnRefresh}
      data={data}
      keyExtractor={(item, _) => item.id.toString()}
      renderItem={({item}) => <FeedCard item={item} navigation={navigation} />}
      ListHeaderComponent={<StatusComp />}
      ListEmptyComponent={<LoadingComp />}
      ListFooterComponent={_listFooterComp}
      initialNumToRender={5}
    />
  );
};

export default FeedList;
