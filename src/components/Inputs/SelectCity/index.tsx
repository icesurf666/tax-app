import React from "react";
import useCitiesStore from "hooks/useCities";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  name: string
}
const SelectCity: React.FC<IProps> = ({ name }) => {
  const cities = useCitiesStore();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Выберите город"
      component={Select}
    >
      {cities.cities.map((city) => {
        return <MenuItem value={city.id}>{city.name}</MenuItem>;
      })}
    </Field>
  );
};

export default SelectCity