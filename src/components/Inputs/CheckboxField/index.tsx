import React from 'react'
import { Field } from 'react-final-form'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Checkbox } from 'final-form-material-ui'

interface IProps {
  name: string
  label?: string
}

const CheckboxField: React.FC<IProps> = ({ name, label = ' ' }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Field
          name={name}
          component={Checkbox}
          type="checkbox"
        />
      }
    />
  )
}

export default CheckboxField