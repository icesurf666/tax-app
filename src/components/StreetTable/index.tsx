import React, { useState } from "react";
import SimpleTable from "components/SimpleTable";
import { TableRow, TableCell, Fab } from "@material-ui/core";
import ChangeFormModal from "widgets/ChangeFormModal";
import AddIcon from "@material-ui/icons/Add";
import AddFormModal from "widgets/AddFormModal";
import uuid from 'uuid/v4'
import useStreetStore from "hooks/useStreets";

const StreetTable: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [addActive, setAddActive] = useState(false);
  const [initial, setInitial] = useState({id: '', name: ''});

  const street = useStreetStore()

  const handleClick = (event: any, row: any) => {
    console.log(event, row);
    setInitial(row);
    setActiveModal(true);
  };
 
  const body = street.streets.map((row) => (
    <TableRow key={row.name} onClick={(event) => handleClick(event, row)}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
    </TableRow>
  ));

  const onDelete = (values: IOption) => {
    street.removeStreet(values.id)
    setActiveModal(false)
  }

  const onEdit = (values: IOption) => {
    street.updateStreet(values)
    setActiveModal(false)
  }

  const onAdd = (values: IOption) => {
    street.addStreet({id: uuid(), name: values.name})
    setAddActive(false)
  }

  return (
    <>
      <SimpleTable
        header={
          <TableRow>
            <TableCell>Код</TableCell>
            <TableCell>Название</TableCell>
          </TableRow>
        }
        body={body}
      />
      <ChangeFormModal
        submit={onEdit}
        initialValues={initial}
        visible={activeModal}
        onDelete={onDelete}
        onClose={() => setActiveModal(false)}
      />
      <AddFormModal submit={onAdd} visible={addActive} onClose={() => setAddActive(false)} />
      <Fab color="primary" aria-label="add" onClick={() => setAddActive(true)}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default StreetTable;
