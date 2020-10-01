/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  Modal
} from 'react-native';
import NetworkConnectivity from './src/NetworkConnetivity'
import ImageZoom from 'react-native-image-pan-zoom';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageViewer from 'react-native-image-zoom-viewer';
import AnimationView from './src/AnimationView'
import UploadImage from './src/UploadImage'
import ExpenseTracker from './src/ExpenseTracker/Main'
import { ExpensTrackerProvider } from './src/ExpenseTracker/ExpensTrackerProvider'
import DiLLingPad from './src/dillingPad'
import PushNotificaiton_ from './src/PushNotification'
import WaterMark from './src/watermark'
import Feed from './src/FiverWork/CardsViews'
import Notification from './src/FiverWork/Notification'
import Review from './src/FiverWork/Reviews'
import FruitCard from './src/FiverWork/FuritCards'
import Ticket from './src/FiverWork/Ticket'
import HousingSocity from './src/HousingSocity'
import ThemeToggle from './src/ThemeToggle/Home'
import { Provider } from 'react-redux'
import store from './src/redux'

const images = [
  {
    url: 'https://res.cloudinary.com/zainahmed/image/upload/v1598882214/garageAssets/y6bhfe9ucpdj6y3jjnrv.png',
  },
  {
    url: 'https://res.cloudinary.com/zainahmed/image/upload/v1598882225/garageAssets/qnfpnf5cw1iz8e6cnapz.jpg',
  },
]



const App = () => {
  return (
    <>
      {/* <View style={{ borderWidth: 5 }}> */}
      {/* <ImageZoom cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={200}
        imageHeight={200}>
        <Image style={{ width: 200, height: 200 }}
          source={{ uri: 'https://res.cloudinary.com/zainahmed/image/upload/v1598882214/garageAssets/y6bhfe9ucpdj6y3jjnrv.png' }} />
      </ImageZoom> */}
      {/* <HousingSocity /> */}
      {/* <NetworkConnectivity /> */}
      {/* <Feed /> */}
      {/* <Notification /> */}
      {/* <Review /> */}
      {/* <FruitCard /> */}
      {/* <AnimationView /> */}
      {/* <UploadImage /> */}
      {/* <DiLLingPad /> */}
      {/* <PushNotificaiton_ /> */}
      {/* <WaterMark /> */}
      {/* <ExpensTrackerProvider>
        <ExpenseTracker />
      </ExpensTrackerProvider> */}
      {/* <Modal visible={true} transparent={true}>
        <ImageViewer style={{ height: 100, width: '100%' }} imageUrls={images} />
      </Modal> */}
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
      {/* </View> */}
      {/* <Ticket /> */}
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
