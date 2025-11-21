import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface SearchBarProps {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onPress?: () => void;
}

export default function SearchBar({ placeholder, value, onChangeText, onPress }: SearchBarProps) {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image
          source={icons.search}
          className='size-5'
          resizeMode='contain'
          tintColor="#ab8bff"
        />
        <TextInput
          onPress={onPress}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className='flex-1 ml-2 text-white text-lg'
          placeholderTextColor="#a8b5db"
        />
    </View>
  )
}