import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {useState} from 'react';
import {Button} from './components/Button';

export function App() {
  const [greeting, setGreeting] = useState('');

  const onButtonPress = value => {
    setGreeting(value);
  };

  const onBackPress = () => {
    setGreeting(false);
  };

  if (greeting) {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>{greeting}!!!</Text>
        <View style={{marginTop: 20}}>
          <Button text={'Go back'} onPress={() => onBackPress()} />
        </View>
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <ScrollView>
          <View
            testID="welcome"
            style={{
              flex: 1,
              paddingTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, marginBottom: 30}}>Welcome</Text>
            <Button
              testID="hello_button"
              onPress={() => onButtonPress('Hello')}
              text={'Say Hello'}
            />
            <TouchableOpacity
              testID="world_button"
              onPress={() => onButtonPress('World')}>
              <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
            </TouchableOpacity>
            <TouchableOpacity
              testID="goodbye_button"
              onPress={() => onButtonPress('Goodbye, World')}>
              <Text style={{color: 'blue', marginTop: 50, marginBottom: 20}}>
                Say Goodbye
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
