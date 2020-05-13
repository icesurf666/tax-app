import React from "react";
import Dialog from "components/Dialog";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Button } from "@material-ui/core";
interface IProps {
  visible: boolean;
  onClose: () => void;
  submit: (values: IContact) => void;
}

const AddContactForm: React.FC<IProps> = ({ visible, onClose, submit }) => {
  return (
    <Dialog
      size="small"
      open={visible}
      onClose={onClose}
      onBackdropClick={onClose}
    >
      <Form
        onSubmit={submit}
        render={({ handleSubmit }) => (
          <>
            <Field
              name="codeCity"
              type="number"
              component={TextField}
              label="Код города"
              margin="normal"
              fullWidth
            />
            <Field
              name="phoneNumber"
              type="number"
              component={TextField}
              label="Номер телефона"
              margin="normal"
              fullWidth
            />
            <Field
              name="fax"
              type="number"
              component={TextField}
              label="Факс"
              margin="normal"
              fullWidth
            />
            <Button onClick={handleSubmit}>Добавить</Button>
          </>
        )}
      ></Form>
    </Dialog>
  );
};

export default AddContactForm;
