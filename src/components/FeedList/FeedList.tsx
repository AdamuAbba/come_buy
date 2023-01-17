import FeedCard from 'components/FeedCard';
import {IFeedList} from 'components/FeedList/types';
import React from 'react';
import {FlatList, View} from 'react-native';
import data from 'utils/data.json';
import {styles} from './FeedList.styles';

const _listFooterComp = () => {
  return <View style={styles.listFooter} />;
};

const FeedList: IFeedList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={2}
      keyExtractor={(item, _) => item.id.toString()}
      renderItem={({item}) => <FeedCard item={item} />}
      ListFooterComponent={_listFooterComp}
      initialNumToRender={5}
    />
  );
};

export default FeedList;
