import React from 'react';
import {Text, Pressable} from 'react-native';

export function Button({
  onPress,
  testID,
  children,
}: {
  onPress: () => void;
  testID?: string | undefined;
  children: string;
}) {
  return (
    <Pressable onPress={onPress} testID={testID}>
      <Text
        style={{
          borderColor: 'grey',
          borderWidth: 2,
          padding: 5,
          margin: 5,
          borderRadius: 10,
        }}>
        {children}
      </Text>
    </Pressable>
  );
}
