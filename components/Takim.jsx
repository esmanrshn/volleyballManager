import React from 'react';
import { Text, View, Image } from 'react-native';

export function Takim({ amblemURL, takimIsmi }) {
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
        }} />
    </View>
  );
}
