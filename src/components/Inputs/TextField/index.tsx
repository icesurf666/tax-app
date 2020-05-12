import React from 'react'
import { Field } from 'react-final-form'
import { TextField as MaterialTextField } from 'final-form-material-ui'

interface IProps {
  name: string
  type: string
  label?: string
}

const TextField: React.FC<IProps> = ({ name, type, label = ' ' }) => {
  return (
    <Field
      fullWidth
      name={name}
      component={MaterialTextField}
      type={type}
      label={label}
    />
  )
}

export default TextField