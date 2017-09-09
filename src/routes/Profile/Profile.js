import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NameForm from '../../components/NameForm'
import DetailsForm from '../../components/DetailsForm'
import Snackbar from 'material-ui/Snackbar'
import './Profile.css'
import { omit } from 'lodash'

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
    this.setState(
      { message: '' },
      this.props.clearMessage
    )
  }

  render() {
    const {
      firstName, lastName, birthDate,
      gender, errorForms, message
    } = this.state

    return (
      <MuiThemeProvider>
        <div className="app__wrapper">
            { this.state.message && <Snackbar
                open={ !!message }
                message={ message }
                autoHideDuration={4000}
                onRequestClose={ this.hideSnackBarMessage }
              />
            }
            <div className="app__header">
              <h2 className="app__title">My details</h2>
            </div>
            <div className="app__container">
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
            </div>
            <div className="app__button">
              <RaisedButton
                label="next"
                secondary={true}
                onClick={ this.handleSubmitClick }
              />
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Profile;
