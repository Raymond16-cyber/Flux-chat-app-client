import { View, Text, FlatList, Image, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import useFriends from '@/hooks/use-friends';
import { ThemedText } from '@/components/themed-text';
import { loopFriends } from '@/hooks/use-loop-friends';
import ThemedIcon from '@/components/themed-icon';


type Props = {
  searchQuery: string;
};

const FriendsList = ({ searchQuery }: Props) => {
    const { friends }: { friends: Friend[] } = useFriends();  
    const scheme = useColorScheme();  
    const loopedFriends = loopFriends(friends)

     const filteredFriends = loopedFriends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return (
        <View className='w-full'>
            <View className='flex-row items-center gap-2 mb-5'>
                <ThemedIcon name='message' size={20} />
                <ThemedText className='text-lg font-bold'>All Chats</ThemedText>
            </View>
            <FlatList
                data={filteredFriends}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View className='flex-row gap-5 mb-5 items-center'>
                        <View>
                            <Image
                                source={{ uri: item.profilePicture }}
                                style={{ width: 60, height: 60, borderRadius: 12 }}
                            />
                        </View>
                        <View className='flex-1 flex-col gap-4'>
                            <View className=' flex-row justify-between items-center'>
                                <ThemedText className='font-bold'>{item.name}</ThemedText>
                                <View className='bg-[#0a7ea4] rounded-full items-center justify-center p-1'>
                                    <Text className='text-xs text-white px-1 rounded-full'>2</Text>
                                </View>
                            </View>
                            <View className='flex-row items-center justify-between'>
                                <Text className={`${scheme === "dark" ? "text-gray-500" : "text-gray-900"}`}>{item.lastMessage || ""}</Text>
                                {
                                    item.isPinned && <ThemedIcon name='pin' size={16}  />
                                }
                            </View>
                        </View>
                    </View>
                )}
                scrollEnabled={false}
            />
        </View>
    )
}

export default FriendsList