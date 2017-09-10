import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {
  ApolloClient, createNetworkInterface, ApolloProvider
} from 'react-apollo'
import { API_ROOT } from './config'

const createClient = () =>
  new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: `https://api.graph.cool/simple/v1/${ API_ROOT }`
    }),
  })

ReactDOM.render(
  <ApolloProvider client={ createClient() }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
