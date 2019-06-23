import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Button,
  Header,
  Title,
  Body,
  Icon,
  Left,
  Right
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Constants from 'expo-constants';
// import { Header, Input } from 'react-native-elements';
// import { Icon } from 'react-native-elements';

import firebase from 'firebase';

class App extends React.Component {
  state = {
    user: '',
    password: ''
  };

  logInUser = (user, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(user, password)
        .then(function(user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  signUpUser = (user, password) => {
    console.log(user);
    try {
      if (this.state.password < 6) {
        alert('Please enter ');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(user, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAtNUK4J6KC8poY5I9raDKrGWx6U7EPVE',
      authDomain: 'align-orders.firebaseapp.com',
      databaseURL: 'https://align-orders.firebaseio.com',
      projectId: 'align-orders',
      storageBucket: 'align-orders.appspot.com'
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />

        <Container style={styles.con}>
          <Form>
            <Item>
              <Label>User</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={user => this.setState({ user: user.trim() })}
              />
            </Item>
            <Item>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={() => this.props.navigation.navigate('Form')}
            >
              <Text style={{ color: 'white' }}>Login</Text>
            </Button>
          </Form>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  con: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;

{
  /* <Button
style={{ marginTop: 10 }}
full
rounded
primary
onPress={() =>
  this.signUpUser(this.state.user, this.state.password)
}
>
<Text style={{ color: 'white' }}>Sign Up</Text>
</Button> */
}
