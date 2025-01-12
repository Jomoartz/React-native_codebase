import React from 'react';
import { Text, View } from "react-native";
import FilterComponent from './components/Filter_component'
import {SimpleClickableList} from './components/SimpleClickableList'


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >

<SimpleClickableList/>
    </View>
  );
}
