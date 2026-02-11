import { View, Text } from 'react-native'
import React from 'react'
import { useColorScheme } from '@/hooks/use-color-scheme.web'


const OnlineIndicator = () => {
  const scheme = useColorScheme()
  const isLight = scheme === "light"

  return (
    <View
      className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 z-50 ${
        isLight ? "border-[#f2f2f2]" : "border-black"
      }`}
    />
  )
}


export default OnlineIndicator