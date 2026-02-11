import { View,ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import ThemedIcon from '@/components/themed-icon';
import Friends from '@/components/Chat-Components/LandingPageComponents/Friends';
import SearchBar from '@/components/ui/searchBar';

export default function HomeScreen() {
  return (
  <SafeAreaView className='flex-1 px-7 flex-col'>
    <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>
      <View className="flex-col gap-5">
        <View className='flex-row items-center justify-between mb-4'>
          <ThemedText type="title">Messages</ThemedText>
          <ThemedIcon name="square.and.pencil" size={24} />
        </View>

        {/* <Friends /> */}
        <Friends />
      </View>

      <SearchBar topSpace={20} />
    </ScrollView>
  </SafeAreaView>
  );
}
