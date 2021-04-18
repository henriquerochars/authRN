import React from 'react';
import {View, StyleSheet} from 'react-native';

import FlatButton from './../../components/FlatButton';

import {useAuth} from './../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();

  console.warn(signed);

  const handleSignIn = async () => {
    signIn();
  };
  return (
    <View style={styles.container}>
      <FlatButton text="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
