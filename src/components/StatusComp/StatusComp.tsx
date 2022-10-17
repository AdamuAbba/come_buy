import {View, FlatList} from 'react-native';
import React from 'react';
import {users} from 'utils/dummyData';
import AvatarComp from 'components/AvatarComp';

const StatusComp = (): JSX.Element => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={users}
        keyExtractor={(item, _) => item.id.toString()}
        renderItem={({item}) => (
          <AvatarComp
            imgUrl={item.imgUrl}
            name={item.name}
            bgColor={item.bgColor}
          />
        )}
      />
    </View>
  );
};

export default StatusComp;
