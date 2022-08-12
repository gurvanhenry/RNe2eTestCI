import React from 'react';
import {Text, Pressable} from 'react-native';

export function Button({text, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={{
          borderColor: 'grey',
          borderWidth: 2,
          padding: 5,
          borderRadius: 10,
        }}>
        {text}
      </Text>
    </Pressable>
  );
}
