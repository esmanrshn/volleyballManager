import React from 'react';
import { Text, View } from 'react-native';
import { Takim } from './Takim';
import { ButtonComponent } from '../App';

// const SayfaComp = ({sayfacomp}) => {
// return (
const SayfaComponent = () => (
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
