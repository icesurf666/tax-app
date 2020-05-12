import React from "react";
import useRegionStore from "hooks/useRegions";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  name: string
}
const SelectRegion: React.FC<IProps> = ({ name }) => {
  const region = useRegionStore();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Выберите регион"
      component={Select}
    >
      {region.regions.map((region) => {
        return <MenuItem value={region.id}>{region.name}</MenuItem>;
      })}
    </Field>
  );
};

export default SelectRegion