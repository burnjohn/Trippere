import React, { PureComponent } from 'react'
import Profile from './Profile'
import { createUser }  from './ProfileService'
import { graphql } from 'react-apollo';
import { get } from 'lodash'



class ProfileContainer extends PureComponent {
  onSubmitClick = (e, { firstName, lastName, gender, birthDate }) => {
    console.log('this.props.mutate', this.props.mutate);
    console.log('data!!!: ', firstName, lastName, gender, birthDate);
  }

  render() {
    const User = get(this.props, 'data.User', null);

    console.log('User', User);

    return(
      <div>
        <Profile
          user={ User }
          onSubmitClick={ this.onSubmitClick }
        />
      </div>
    )
  }
}

export default graphql(createUser)(ProfileContainer);