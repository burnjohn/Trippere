import React, { PureComponent } from 'react';
import {
  ApolloClient, createNetworkInterface, ApolloProvider
} from 'react-apollo';
import { API_ROOT } from '../config'
import Profile from './Profile/ProfileContainer'
import AddPhoto from './AddPhoto/AddPhotoContainer'

class App extends PureComponent {
  createClient() {
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: `https://api.graph.cool/simple/v1/${ API_ROOT }`
      }),
    });
  }

  render() {

    return (
      <ApolloProvider client={this.createClient()}>
        <AddPhoto />
      </ApolloProvider>
    );
  }
}

export default App;