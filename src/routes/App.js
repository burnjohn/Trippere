import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './Profile/ProfileContainer'
import AddPhoto from './AddPhoto/AddPhotoContainer'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Profile }/>
          <Route path="/add-photos" component={ AddPhoto }/>
        </div>
      </Router>
    )
  }
}

export default App