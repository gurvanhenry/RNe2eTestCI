import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {Button} from './components/Button';

export function App() {
  const [displayHelloWorld, setDisplayHelloWorld] = useState(false);

  const onPressHello = () => {
    setDisplayHelloWorld(true);
  };

  const onBackPress = () => {
    setDisplayHelloWorld(false);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView>
        {displayHelloWorld ? (
          <View
            style={{
              flex: 1,
              paddingTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25}}>{'Hello World!!!'}</Text>
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
            <Button testID="hello_button" onPress={() => onPressHello()}>
              Say Hello
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
