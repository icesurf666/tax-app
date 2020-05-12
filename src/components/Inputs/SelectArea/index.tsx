import React from "react";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import useAreas from "hooks/useAreas";

interface IProps {
  name: string
}
const SelectArea: React.FC<IProps> = ({ name }) => {
  const area = useAreas();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Выберите район"
      component={Select}
    >
      {area.areas.map((area) => {
        return <MenuItem value={area.id}>{area.name}</MenuItem>;
      })}
    </Field>
  );
};

export default SelectArea