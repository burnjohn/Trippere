import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NameForm from '../../components/NameForm'
import DetailsForm from '../../components/DetailsForm'
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
      errorForms: []
    }
  }

  componentWillUpdate() {

  }

  updateField = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmitClick = () => {
    const newUser = { ...omit(this.state, ['errorForms']) }
    const emptyForms = getEmptyForms(newUser);

    this.setState({ errorForms: emptyForms })

    if (emptyForms.length) return
    
    this.props.onSubmitClick(newUser)
  }

  render() {
    const { onSubmitClick } = this.props
    const {
      firstName, lastName, birthDate,
      gender, errorForms
    } = this.state

    return (
      <MuiThemeProvider>
        <div className="app__wrapper">

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
