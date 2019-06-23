import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, StatusBar } from 'react-native';
import {
  Input,
  Container,
  Item,
  View,
  Form,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  DatePicker
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Container style={{ flex: 1 }}>
          <Header style={{ backgroundColor: 'weight' }}>
            <Left style={{ flex: 1 }}>
              <Image
                style={{ width: 50, height: 48 }}
                source={require('./Img/logo.png')}
              />
            </Left>
            <Body style={{ flex: 1 }}>
              <Title style={{ color: 'black' }}>Client Form</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>
          <KeyboardAwareScrollView>
            <View>
              <Text
                style={{
                  paddingTop: 10,
                  paddingHorizontal: 10,
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                Customer details
              </Text>
            </View>

            <Form>
              <Item>
                <Input placeholder="Name" />
              </Item>
              <Item>
                <Input placeholder="Location" />
              </Item>
              <Item>
                <Input placeholder="Number" keyboardType="number-pad" />
              </Item>
              <Item>
                <Input placeholder="What's app number" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Email" />
              </Item>
            </Form>
          </KeyboardAwareScrollView>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight
  }
});

// <View style={styles.container}>
// <View style={{ flex: 1 }}>
//   <Container>
//     <Item>
//       <Label>User</Label>
//       <Input
//         autoCorrect={false}
//         autoCapitalize="none"
//         onChangeText={user => this.setState({ user: user.trim() })}
//       />
//     </Item>
//   </Container>
// </View>
// </View>
