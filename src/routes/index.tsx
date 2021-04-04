import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import AuthContext from './../contexts/auth';

import AuthRotes from './../routes/auth.routes';
import AppRoutes from './../routes/app.routes';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRotes />;
};

export default Routes;
