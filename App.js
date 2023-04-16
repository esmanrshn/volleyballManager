import { StatusBar } from 'expo-status-bar';
import {
  FlatList, StyleSheet, Text, View, Image, Button, ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyStack />
  );
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
        <Text>
          TAKIMLAR
        </Text>

        <FlatList
          data={[
            <Takim amblemURL="https://tinyurl.com/fenerbahce-logo" takimIsmi="FENERBAHCE" key={0} />,
            <Takim amblemURL="https://tinyurl.com/ptt-logo" takimIsmi="PTT" key={1} />,
            <Takim amblemURL="https://tinyurl.com/eczacibasi-logo" takimIsmi="ECZACIBAŞI VİTRA" key={2} />,
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
  return (
    <></>
  );
}

function Takim({ amblemURL, takimIsmi }) {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>
        {takimIsmi}
      </Text>
      <Image
        source={{
          uri: amblemURL,
          width: 100,
          height: 100,
        }}
        resizeMethod="resize"
        style={{
          marginBottom: 16,
        }}
      />
    </View>
  );
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

function ButtonComponent({ onPress }) {
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

// const SayfaComp = ({sayfacomp}) => {
// return (

const sayfacomp = () => (
  <View>
    <Text>
      <Takim amblemURL="https://tinyurl.com/fenerbahce-logo" takimIsmi="FENERBAHCE" />
      <Takim amblemURL="https://tinyurl.com/ptt-logo" takimIsmi="PTT" />
      <Takim amblemURL="https://tinyurl.com/eczacibasi-logo" takimIsmi="ECZACIBAŞI VİTRA" />
      <Takim amblemURL="https://tinyurl.com/vakifbank-logo" takimIsmi="VAKIFBANK" />
    </Text>
    <ButtonComponent onPress={() => <ButtonComponent />} />
  </View>
);
