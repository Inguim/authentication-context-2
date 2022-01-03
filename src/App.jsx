import React from 'react';
import RoutesElements from './routes';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './styles/global'

function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesElements />
    </AuthProvider>
  )
}

export default App;
