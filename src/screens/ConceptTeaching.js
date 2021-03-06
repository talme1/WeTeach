import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import { FontAwesome5 } from '@expo/vector-icons';
import MyCourses from '../components/MyCourses';

const ConceptTeaching = () => {
return <SafeAreaView forceInset={{top:"always"}}>
           <Text style={{fontWeight:"bold",fontSize:48,justifyContent:"center"}}>ConceptTeaching</Text>
           <MyCourses/>
       </SafeAreaView>
};

ConceptTeaching.navigationOptions = {
    tabBarIcon: <FontAwesome5 name="users" size={22} />
  };

const Styles = StyleSheet.create({})

export default ConceptTeaching