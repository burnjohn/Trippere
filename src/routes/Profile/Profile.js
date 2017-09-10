import React, { PureComponent } from 'react'
import NameForm from '../../components/NameForm/NameForm'
import DetailsForm from '../../components/DetailsForm/DetailsForm'
import './Profile.css'
import { omit } from 'lodash'
import Layout from '../../components/Layout/Layout';

const NAME_FIELDS = [
  {
    name: 'firstName',
    placeholder: 'John',
  },
  {
    name: 'lastName',
    placeholder: 'Doe',
  },
]

const getEmptyForms = forms => Object.keys(forms).filter(key => !forms[key])

class Profile extends PureComponent {
  constructor() {
    super()

    this.state = {
      firstName: null,
      lastName: null,
      gender: null,
      birthDate: null,
      errorForms: [],
      message: null
    }
  }

  componentWillReceiveProps({ message }) {
    message && this.setState({ message })
  }

  updateField = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmitClick = () => {
    const newUser = { ...omit(this.state, ['errorForms', 'message' ]) }
    const emptyForms = getEmptyForms(newUser);

    this.setState({ errorForms: emptyForms })

    if (emptyForms.length) return

    this.props.onSubmitClick(newUser)
  }

  hideSnackBarMessage = () => {
    this.setState({ message: '' })
  }

  render() {
    const {
      firstName, lastName, birthDate,
      gender, errorForms, message
    } = this.state

    return (
      <Layout
        message={message}
        headerText={'My details'}
        hideSnackBarMessage={ this.hideSnackBarMessage }
        onSubmitClick={ this.handleSubmitClick }
      >
        <NameForm
          onUpdate={ this.updateField }
          nameFields={ NAME_FIELDS }
          nameValues={{ firstName, lastName }}
          errorFields={ errorForms }
        />
        <DetailsForm
          onUpdate={ this.updateField }
          birthDateVal={ birthDate }
          genderVal={ gender }
          errorFields={ errorForms }
        />
      </Layout>
    );
  }
}

export default Profile;
