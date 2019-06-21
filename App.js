// TODO: add 6 columns for input

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Form, Item, Label, Input, Button } from 'native-base';
// import { Header, Input } from 'react-native-elements';
// import { Icon } from 'react-native-elements';

import firebase from 'firebase';

class App extends React.Component {
  state = {
    user: '',
    password: ''
  };
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
        <Form>
          <Item>
            <Label>User</Label>
            <Input autoCorrect={false} autoCapitalize="none" />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>
          <Button style={{ marginTop: 10 }} full rounded success>
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

export default App;
/* <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
        <TextInput
          placeholder={this.state.text}
          style={{
            flex: 1,
            borderColor: 'gray',
            borderWidth: 1
          }}
        />
      </View> */
