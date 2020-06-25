import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class FavoritePage extends Component {
  render() {
    const {navigation} = this.props;
    console.log('navigation=>', navigation);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>FavoritePage </Text>
        <Button
          title={'跳转详情页'}
          onPress={() => {
            NavigationUtil.goPage({}, 'DetailPage');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
