import React from 'react'
import TextField from 'material-ui/TextField'
import './NameForm.css'

const NameForm = ({ nameFields = [], onUpdate, nameValues, errorFields }) => {
  const handleChange = (name, e, value) => {
    onUpdate(name, value);
  };

  return (
    <div>
      <h3>Name</h3>
      <div className="name__container">
        {nameFields.map(
          ({ name, placeholder }) => (
            <TextField
              key={ placeholder }
              className={ errorFields.includes(name) ? 'empty-field' : '' }
              type='text'
              defaultValue={ placeholder }
              value={ nameValues[name] || '' }
              name={ name }
              onChange={ handleChange.bind(this, name) }
            />
          ))
        }
      </div>
    </div>
  )
}

export default NameForm