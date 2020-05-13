import React from "react";
import Dialog from "components/Dialog";
import { Form, Field } from "react-final-form";
import { Button } from "@material-ui/core";
import SelectTypeOfAddress from "components/Inputs/SelectTypeOfAddress";
import TextField from "components/Inputs/TextField";
import SelectRegion from "components/Inputs/SelectRegion";
import SelectArea from "components/Inputs/SelectArea";
import SelectLocality from "components/Inputs/SelectLocality";
import SelectCity from "components/Inputs/SelectCity";
import SelectStreet from "components/Inputs/SelectStreet";
import block from "bem-cn";
import './styles.sass'
import useInfoStore from "hooks/useInfo";
import { validate } from "./validator";
import SelectContact from "components/Inputs/ContactField";

const cls = block('info-btn')

interface IProps {
  visible: boolean;
  onClose: () => void;
  submit: (values: IInfo) => void;
  initialValues?: IInfo;
  type: 'add' | 'update',
  onRemove?: (values: IInfo) => void
}

const InfoModal: React.FC<IProps> = ({
  visible,
  onClose,
  submit,
  type,
  initialValues,
}) => {
  const { removeInfo } = useInfoStore()
  const onRemove = () => {
    removeInfo(initialValues && initialValues.id || '')
    onClose()
  }
  return (
    <Dialog
      size="big"
      open={visible}
      onClose={onClose}
      onBackdropClick={onClose}
    >
      <Form
        onSubmit={submit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <>
            <TextField name="name" type="string" label="Наименование" />
            <SelectContact name='contactId' />
            <SelectTypeOfAddress name="typeOfAddresId" />
            <TextField name="dateOfStart" type="date" />
            <TextField name="dateOfEnd" type="date" />
            <SelectRegion name="regionId" />
            <SelectArea name="areaId" />
            <SelectLocality name="localityId" />
            <SelectCity name="cityId" />
            <SelectStreet name="streetId" />
            <TextField name="zip" type="number" label="Индекс" />
            <TextField name="numberBuild" type="number" label="Номер здания" />
            <TextField name="kv" type="number" label="Номер квартиры" />
            <div className={cls()}>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
              Сохранить
            </Button>
            { type === 'update' && <Button variant="contained" color="secondary" onClick={onRemove}>
              Удалить
        </Button> }
            </div>
          </>
        )}
      ></Form>
    </Dialog>
  );
};

export default InfoModal;
