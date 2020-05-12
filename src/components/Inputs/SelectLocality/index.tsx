import React from "react";
import useLocalityStore from "hooks/useLocalities";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  name: string
}
const SelectLocality: React.FC<IProps> = ({ name }) => {
  const locality = useLocalityStore();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Выберите населенный пункт"
      component={Select}
    >
      {locality.localities.map((locality) => {
        return <MenuItem value={locality.id}>{locality.name}</MenuItem>
      })}
    </Field>
  );
};

export default SelectLocality