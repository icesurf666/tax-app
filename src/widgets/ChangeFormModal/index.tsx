import React from "react"
import Dialog from "components/Dialog"
import { Form, Field } from 'react-final-form'
import {TextField} from 'final-form-material-ui'
import { Button } from "@material-ui/core"
interface IProps {
  visible: boolean;
  onClose: () => void;
  initialValues: IOption;
  submit: (values: IOption) => void;
  onDelete: (values: IOption) => void;

}

const ChangeFormModal: React.FC<IProps> = ({ visible, onClose, initialValues, submit, onDelete}) => {


  return (
    <Dialog size='small' open={visible} onClose={onClose} onBackdropClick={onClose}>
      <Form initialValues={initialValues} onSubmit={submit} render={({handleSubmit, values}) => (
        <>
        <Field
          name="name"
          type="text"
          component={TextField}
          label="Название"
          margin="normal"
          fullWidth
        />
        <Button onClick={handleSubmit}>Сохранить</Button>
        <Button onClick={() => onDelete(values)}>Удалить</Button>
        </>
      )}>
      </Form>  
    </Dialog>
  )
}

export default ChangeFormModal