import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Animated, Easing
} from 'react-native';
import { connect } from 'react-redux';
import RotateModule from './RotateModule';
import logo_text from './nord_clan.png';
import logo_nc from './logo_nc.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

const spinValue = new Animated.Value(1);
let rotation = 0;

const App = ({ needRotate }) => {
  if (needRotate) (rotation += 20);
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={logo_nc} style={{ width: 200, height: 200, transform: [{rotate: rotation + 'deg'}], }} resizeMode="contain" />
        <Image source={logo_text} style={{ width: 150, height: 150 }} resizeMode="contain" />
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={() => RotateModule.startService()}>
          <Text style={styles.instructions}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => RotateModule.stopService()}>
          <Text style={styles.instructions}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = store => ({
  needRotate: store.App.needRotate,
});

export default connect(mapStateToProps)(App);
