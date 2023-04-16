import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Takim } from './components/Takim';

const Stack = createNativeStackNavigator();

export default function App() {
  return <MyStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    marginTop: 100,
  },
});

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>TAKIMLAR</Text>

        <FlatList
          data={[
            <Takim
              amblemURL="https://tinyurl.com/fenerbahce-logo"
              takimIsmi="FENERBAHCE"
              key={0}
            />,
            <Takim amblemURL="https://tinyurl.com/ptt-logo" takimIsmi="PTT" key={1} />,
            <Takim
              amblemURL="https://tinyurl.com/eczacibasi-logo"
              takimIsmi="ECZACIBAŞI VİTRA"
              key={2}
            />,
            <Takim amblemURL="https://tinyurl.com/vakifbank-logo" takimIsmi="VAKIFBANK" key={3} />,
          ]}
          renderItem={(comp) => comp.item}
        />

        <View style={{ backgroundColor: '#eeeeee', marginTop: 16 }}>
          <ButtonComponent onPress={() => navigation.navigate('Home', { screen: 'App.js' })} />
        </View>

        <StatusBar />
      </View>
    </ScrollView>
  );
}

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function OrnekComponent() {
  return <></>;
}

// const buttoncomp = ({Button}) => {
//   return (
//     <View
//     style={{ backgroundColor: "#eeeeee", marginTop: 16 }}>
//     <Button
//       color="#f194ff"
//       title='EŞLEŞTİR '
//       backgroundColor="red"
//       onPress={() => navigation.navigate('Navigate', { screen: "App.js" })} />
//   </View>
//   )
// }

export function ButtonComponent({ onPress }) {
  const ismim = 'Esma';

  return (
    <View style={{ backgroundColor: '#eeeeee', marginTop: 16 }}>
      <Button
        color="#f194ff"
        title="EŞLEŞTİR "
        backgroundColor="red"
        onPress={() => console.log({ ismim })}
      />
    </View>
  );
}
