import { View,ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedIcon from '@/components/themed-icon';
import SearchBar from '@/components/ui/searchBar';
import OnlineFriends from '@/components/Chat-Components/LandingPageComponents/OnlineFriends';
import FriendsList from '@/components/Chat-Components/LandingPageComponents/FriendsList';
import ThemedInputField from '@/components/themed-input-field';
import { useState } from 'react';

export default function HomeScreen() {
   const [searchQuery, setSearchQuery] = useState("");
    const onChangeText = (text: string) => {
      setSearchQuery(text);
    };
    
  return (
  <SafeAreaView className='flex-1 px-7 flex-col'>
    <View className="flex-col gap-5">
      <View className='flex-row items-center justify-between mb-4'>
        <ThemedText type="title">Messages</ThemedText>
        <ThemedIcon name="square.and.pencil" size={24} />
      </View>

      {/* <Friends /> */}
      <OnlineFriends />
    </View>

    <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>
      {/* <SearchBar topSpace={20} /> */}
      <ThemedInputField onChangeText={onChangeText} />
      {/* Friends List */}
      <View className='flex-1'>
        <FriendsList searchQuery={searchQuery} />
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}
