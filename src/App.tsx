import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {Button} from './components/Button';

export function App() {
  const [greeting, setGreeting] = useState('');

  const onButtonPress = value => {
    setGreeting(value);
  };

  const onBackPress = () => {
    setGreeting('');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView>
        {greeting ? (
          <View
            style={{
              flex: 1,
              paddingTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25}}>{greeting}!!!</Text>
            <View style={{marginTop: 20}}>
              <Button onPress={() => onBackPress()}>Go back</Button>
            </View>
          </View>
        ) : (
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
              onPress={() => onButtonPress('Hello')}>
              Say Hello
            </Button>
            <Button
              testID="world_button"
              onPress={() => onButtonPress('World')}>
              Say World
            </Button>
            <Button
              testID="goodbye_button"
              onPress={() => onButtonPress('Goodbye, World')}>
              Say Goodbye
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
