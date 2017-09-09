import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar'
import './Layout.css'

const Layout = ({
  message, headerText, hideSnackBarMessage,
  onSubmitClick, children
}) => (
  <MuiThemeProvider>
    <div className="app__wrapper">
      { message && <Snackbar
        open={ !!message }
        message={ message }
        autoHideDuration={4000}
        onRequestClose={ hideSnackBarMessage }
      />
      }
      <div className="app__header">
        <h2 className="app__title">{ headerText }</h2>
      </div>
      <div className="app__container">

        { children }

      </div>
      <div className="app__button">
        <RaisedButton
          label="next"
          secondary={true}
          onClick={ onSubmitClick }
        />
      </div>
    </div>
  </MuiThemeProvider>
)

export default Layout;
