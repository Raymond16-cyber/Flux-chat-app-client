import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import OnlineIndicator from '@/components/ui/onlineIndicator';
import MoreCard from './MoreFriendsCard';

const Friends = () => {
    const friends: Friend[] = [
        {
            _id: '1',
            name: 'John',
            username: 'johndoe',
            profilePicture: 'https://image.tmdb.org/t/p/w500/3HsIAbHWbFDUbY2jfj4wqEjGC3b.jpg',
            isOnline: true,
        },
        {
            _id: '2',
            name: 'Jane',
            username: 'janesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
            isOnline: false,
        },
        {
            _id: '3',
            name: 'Bob',
            username: 'bobsmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/3HsIAbHWbFDUbY2jfj4wqEjGC3b.jpg',
            isOnline: true,
        },
        {
            _id: '4',
            name: 'Alice',
            username: 'alicesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
            isOnline: false,
        },
        {
            _id: '5',
            name: 'Charlie',
            username: 'charliesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/3HsIAbHWbFDUbY2jfj4wqEjGC3b.jpg',
            isOnline: true,
        },
        {
            _id: '6',
            name: 'Dave',
            username: 'davesmith',
            profilePicture: 'https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
            isOnline: false,
        }
    ];

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

export default Friends