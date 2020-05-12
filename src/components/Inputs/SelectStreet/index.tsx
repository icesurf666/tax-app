import React from "react";
import useStreetStore from "hooks/useStreets";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  name: string
}
const SelectStreet: React.FC<IProps> = ({ name }) => {
  const street = useStreetStore();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Выберите улицу"
      component={Select}
    >
      {street.streets.map((street) => {
        return <MenuItem value={street.id}>{street.name}</MenuItem>;
      })}
    </Field>
  );
};

export default SelectStreet