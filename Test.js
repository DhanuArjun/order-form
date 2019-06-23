import React, { Component } from 'react';
import {
  Platform,
  CheckBox,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
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
  DatePicker,
  ListItem
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class Test extends Component {
  state = {
    residential: false,
    oneBhk: false,
    towBhk: false,
    threeBhk: false,
    duplex: false,
    triplex: false,
    commercial: false,
    hospital: false,
    hostel: false,
    hotel: false,
    office: false,
    bank: false,
    college: false,
    school: false,
    // customer requirements
    painting: false,
    falseCeiling: false,
    wardrobes: false,
    modularKitchen: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Container style={{ flex: 1 }}>
          <Header
            style={{
              backgroundColor: 'weight'
            }}
          >
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
          <KeyboardAwareScrollView enableOnAndroid extraScrollHeight={200}>
            <Content>
              <Form>
                <View>
                  <Text
                    style={{
                      paddingTop: 10,
                      paddingHorizontal: 10,
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    Customer Details
                  </Text>
                </View>
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
              </Form>
              <View>
                <View>
                  <Text
                    style={{
                      paddingTop: 10,
                      paddingHorizontal: 10,
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    Works looking for
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ paddingTop: 10 }}
                      value={this.state.residential}
                      onValueChange={() =>
                        this.setState({ residential: !this.state.residential })
                      }
                    />
                    <Text style={styles.boxText}>Residential</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ paddingTop: 10 }}
                      value={this.state.oneBhk}
                      onValueChange={() =>
                        this.setState({ oneBhk: !this.state.oneBhk })
                      }
                    />
                    <Text style={styles.boxText}>1Bhk</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ paddingTop: 10 }}
                      value={this.state.towBhk}
                      onValueChange={() =>
                        this.setState({ towBhk: !this.state.towBhk })
                      }
                    />
                    <Text style={styles.boxText}>2Bhk</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      paddingTop: 10,
                      paddingHorizontal: 10,
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    Customer Requirements
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ paddingTop: 10 }}
                      value={this.state.falseCeiling}
                      onValueChange={() =>
                        this.setState({
                          falseCeiling: !this.state.falseCeiling
                        })
                      }
                    />
                    <Text style={styles.boxText}>False Ceiling</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ paddingTop: 10 }}
                      value={this.state.wardrobes}
                      onValueChange={() =>
                        this.setState({ wardrobes: !this.state.wardrobes })
                      }
                    />
                    <Text style={styles.boxText}>Wardrobes</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                      style={{ paddingTop: 10 }}
                      value={this.state.painting}
                      onValueChange={() =>
                        this.setState({ painting: !this.state.painting })
                      }
                    />
                    <Text style={styles.boxText}>Painting</Text>
                  </View>
                </View>
              </View>
            </Content>
          </KeyboardAwareScrollView>
        </Container>
      </Container>
    );
  }
}

// <ListItem>
// <CheckBox checked={this.state.checked} />
// <Body>
//   <Text>Residential</Text>
// </Body>
// </ListItem>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight
  },
  boxText: {
    marginTop: 4,
    fontSize: 18
  }
});
