import React from "react";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import useContactsStore from "hooks/useContacts";

interface IProps {
  name: string
}
const SelectContact: React.FC<IProps> = ({ name }) => {
  const contacts = useContactsStore();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Контактные данные"
      component={Select}
    >
      {contacts.contacts.map((contact) => {
        return <MenuItem value={contact.id}>
          {`Код города: ${contact.codeCity},
            Телефон: ${contact.phoneNumber},
            Факс: ${contact.fax}`}
          </MenuItem>;
      })}
    </Field>
  );
};

export default SelectContact