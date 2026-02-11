import { View, Text } from 'react-native'
import React from 'react'
import ThemedIcon from '../themed-icon'
import { ThemedView } from '../themed-view'
import { ThemedText } from '../themed-text'

const SearchBar = ({topSpace}:{topSpace?: number}) => {
  return (
    <ThemedView className="w-full bg-gray-200 rounded-xl flex-row items-center justify-between px-3 mb-4 py-4" style={{ marginTop: topSpace }}>
      <ThemedText className="text-gray-500">Search or start a message</ThemedText>
      <ThemedIcon name="magnifyingglass" size={20} />
    </ThemedView>
  )
}

export default SearchBar