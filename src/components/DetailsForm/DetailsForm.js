import React from 'react'
import './DetailsForm.css'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'

const gender = [
  { label: 'male',  value: 'male'},
  { label: 'female', value: 'female' }
]

const DetailsForm = ({ onUpdate, birthDateVal, genderVal, errorFields }) => {
  const handleDateChange = (e, value) => {
    onUpdate('birthDate', value )
  }
  const handleSelectChange = (e, index, value) => {
    onUpdate('gender', value)
  }

  return (
    <div className="details-form">
      <h3>Age and Gender</h3>
      <div className="df__container">
        <DatePicker
          className={ errorFields.includes('birthDate') ? 'empty-field' : '' }
          onChange={ handleDateChange }
          value={ birthDateVal }
          defaultDate={ birthDateVal }
          hintText="Day/Month/Year"
        />

        <SelectField
          className={ errorFields.includes('gender') ? 'empty-field' : '' }
          name="gender"
          value={ genderVal }
          hintText="Gender"
          onChange={ handleSelectChange }
        >
          {
            gender.map(({ label, value }, index) => (
              <MenuItem
                key={ value }
                value={ value }
                primaryText={ label }
              />
            ))
          }
        </SelectField>
      </div>
    </div>
  )
}

export default DetailsForm