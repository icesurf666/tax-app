import React from "react";
import useTypeOfAddressStore from "hooks/useTypeOfAddress";
import { Field } from "react-final-form";
import { Select } from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  name: string
}

const SelectTypeOfAddress: React.FC<IProps> = ({ name }) => {
  const typeOfAddress = useTypeOfAddressStore();
  return (
    <Field
      formControlProps={{ fullWidth: true }}
      fullWidth
      name={name}
      label="Выберите тип адреса"
      component={Select}
    >
      {typeOfAddress.typeOfAddresses.map((typeOfAddress) => {
        return <MenuItem value={typeOfAddress.id}>{typeOfAddress.name}</MenuItem>;
      })}
    </Field>
  );
};

export default SelectTypeOfAddress