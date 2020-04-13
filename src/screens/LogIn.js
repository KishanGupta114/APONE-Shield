import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TypingAnimation} from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Button from './SignUpButton';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing_email: false,
      typing_password: false,
      animation_login: new Animated.Value(width - 50),
      enable: true,
    };
  }

  _foucus(value) {
    if (value === 'email') {
      this.setState({
        typing_email: true,
        typing_password: false,
      });
    } else {
      this.setState({
        typing_email: false,
        typing_password: true,
      });
    }
  }

  _typing() {
    return <TypingAnimation dotColor="#E71C23" style={{marginRight: 25}} />;
  }

  _animation() {
    Animated.timing(this.state.animation_login, {
      toValue: 40,
      duration: 250,
    }).start();

    setTimeout(() => {
      this.setState({
        enable: false,
        typing_email: false,
        typing_password: false,
      });
    }, 150);
  }

  render() {
    const width = this.state.animation_login;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="purple" />
        <View style={styles.header}>
          <ImageBackground
            source={require('../components/res/header.png')}
            style={styles.imageBackground}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Welcome Back To
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              APONE SHIELD
            </Text>
            <Text
              style={{
                color: 'yellow',
              }}>
              Sign in to continute
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 50,
              },
            ]}>
            E-mail
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your email.."
              style={styles.textInput}
              onFocus={() => this._foucus('email')}
            />
            {this.state.typing_email ? this._typing() : null}
          </View>

          <Text
            style={[
              styles.title,
              {
                marginTop: 20,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <TextInput
              secureTextEntry
              placeholder="Your password.."
              style={styles.textInput}
              onFocus={() => this._foucus('password')}
            />
            {this.state.typing_password ? this._typing() : null}
          </View>

          <TouchableOpacity onPress={() => this._animation()}>
            <View style={styles.button_container}>
              <Animated.View
                style={[
                  styles.animation,
                  {
                    width,
                  },
                ]}>
                {this.state.enable ? (
                  <Text style={styles.textLogin}>Login</Text>
                ) : (
                  <Animatable.View animation="bounceIn" delay={50}>
                    <FontAwesome name="check" color="white" size={20} />
                  </Animatable.View>
                )}
              </Animated.View>
            </View>
          </TouchableOpacity>

          <View>
            <Button />
          </View>

          <View style={styles.signUp}>
            <Text style={{color: 'black'}}>Don't have an account?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 2,
    padding: 20,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: 'gray',
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  animation: {
    backgroundColor: '#93278f',
    paddingVertical: 10,
    marginTop: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 2,
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
