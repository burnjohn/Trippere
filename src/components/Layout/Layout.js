import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/Snackbar'
import './Layout.css'

const nextBtnStyle = {
  backgroundColor: '#ba436e',
  padding: '10px 50px'
}

const Layout = ({
  message, headerText, hideSnackBarMessage,
  onSubmitClick, children, buttonClass
}) => (
  <MuiThemeProvider>
    <div className="app__wrapper">
      { message && (
          <Snackbar
            open={ !!message }
            message={ message }
            autoHideDuration={4000}
            onRequestClose={ hideSnackBarMessage }
          />
        )
      }
      <div className="app__header">
        <h2 className="app__title">{ headerText }</h2>
      </div>
      <div className="app__container">

        { children }

      </div>
      <div className={`app__button ${ buttonClass }`}>
        <RaisedButton
          labelStyle={ nextBtnStyle }
          className="next-button"
          label="next"
          secondary={true}
          onClick={ onSubmitClick }
        />
      </div>
    </div>
  </MuiThemeProvider>
)

export default Layout
