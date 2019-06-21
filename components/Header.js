import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: ''
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{this.props.albums}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 5
  },
  text: {
    fontSize: 20
  }
});
