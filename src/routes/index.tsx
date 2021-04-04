import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {useAuth} from './../contexts/auth';

import AuthRotes from './../routes/auth.routes';
import AppRoutes from './../routes/app.routes';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRotes />;
};

export default Routes;
