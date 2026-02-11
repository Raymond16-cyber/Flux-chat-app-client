import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import OnlineIndicator from '@/components/ui/onlineIndicator';
import MoreCard from './MoreFriendsCard';
import useFriends from '@/hooks/use-friends';

const OnlineFriends = () => {
    const { friends } = useFriends();
    const MAX_VISIBLE = 4;
    const visibleFriends = friends.slice(0, MAX_VISIBLE);
    const hiddenCount = friends.length - MAX_VISIBLE;
    const hiddenFriends = friends.slice(MAX_VISIBLE);


  return (
    <FlatList
    data={visibleFriends}
    horizontal
    keyExtractor={(item) => item._id}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingVertical: 10, overflow: 'visible' }}
    renderItem={({ item }) => (
      <View className="mr-4 items-center">
        <View className="relative">
          <Image
            source={{ uri: item.profilePicture }}
            style={{ width: 60, height: 60, borderRadius: 12 }}
          />
          {item.isOnline && <OnlineIndicator />}
        </View>
        <ThemedText className="font-bold">
          {item.name}
        </ThemedText>
      </View>
    )}
  ListFooterComponent={
    hiddenCount > 0 ? (
      <MoreCard
        hiddenFriends={hiddenFriends}
        hiddenCount={hiddenCount}
      />
    ) : null
  }
/>

  )
}

export default OnlineFriends