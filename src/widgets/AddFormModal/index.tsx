import React from "react"
import Dialog from "components/Dialog"
import { Form, Field } from 'react-final-form'
import {TextField} from 'final-form-material-ui'
import { Button } from "@material-ui/core"
interface IProps {
  visible: boolean;
  onClose: () => void;
  submit: (values: IOption) => void;
}

const AddFormModal: React.FC<IProps> = ({ visible, onClose, submit }) => {
  return (
    <Dialog size='small' open={visible} onClose={onClose} onBackdropClick={onClose}>
      <Form onSubmit={submit} render={({handleSubmit}) => (
        <>
        <Field
          name="name"
          type="text"
          component={TextField}
          label="Название"
          margin="normal"
          fullWidth
        />
        <Button onClick={handleSubmit}>Добавить</Button>
        </>
      )}>
      </Form>  
    </Dialog>
  )
}

export default AddFormModal