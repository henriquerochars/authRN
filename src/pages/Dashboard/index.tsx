import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import FlatButton from './../../components/FlatButton';

import {useAuth} from './../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  async function handleSignOut() {
    await signOut();
  }
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <FlatButton text="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
