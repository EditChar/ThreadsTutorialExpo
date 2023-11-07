import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { createRandomUser } from '../../utils/generate-dommy-data';
import { ThreadsContext } from '../../context/thread-context';
import ThreadsItem from '../../components/ThreadsItem';


export default function TabOneScreen() {

  const animationRef = React.useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext);


  return (
    <SafeAreaView>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal:10,
        paddingTop: Platform.select({android:30}),
      }}
      refreshControl={
      <RefreshControl 
      refreshing={false}
      onRefresh={()=> {animationRef.current?.play()}}
      tintColor={'transparent'}
      />
    }
      >
        <Lottie 
        ref={animationRef}
        source={require("../../lottie-animations/thread.json")}
        loop={false}
        autoPlay
        style={{
          width:90,
          height:90,
          alignSelf:'center',
        }}
        />
        {threads.map((thread) => (
         <ThreadsItem key={thread.id} {...thread}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

