import React, { PureComponent } from 'react';
import {
  ApolloClient, createNetworkInterface, ApolloProvider
} from 'react-apollo';
import Profile from './Profile/ProfileContainer';

class App extends PureComponent {
  createClient() {
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj7d9b3a80wvv0108t658pcrc'
      }),
    });
  }

  render() {

    return (
      <ApolloProvider client={this.createClient()}>
        <Profile />
      </ApolloProvider>
    );
  }
}

export default App;