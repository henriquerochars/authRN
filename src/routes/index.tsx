import React, {useContext} from 'react';

import AuthContext from './../contexts/auth';

import AuthRotes from './../routes/auth.routes';
import AppRoutes from './../routes/app.routes';

const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRotes />;
};

export default Routes;
