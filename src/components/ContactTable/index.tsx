import React, { useState } from "react";
import SimpleTable from "components/SimpleTable";
import { TableRow, TableCell, Fab } from "@material-ui/core";
import CitiesFormModal from "widgets/ChangeFormModal";
import AddIcon from "@material-ui/icons/Add";
import AddFormModal from "widgets/AddFormModal";
import useCitiesStore from "hooks/useCities";
import uuid from 'uuid/v4'
import useContactsStore from "hooks/useContacts";
import AddContactForm from "widgets/AddContactForm";

const ContactTable: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [addActive, setAddActive] = useState(false);

  const contacts = useContactsStore()

  const handleClick = (event: any, row: any) => {
    setActiveModal(true);
  };
 
  const body = contacts.contacts.map((row) => (
    <TableRow key={row.id} onClick={(event) => handleClick(event, row)}>
      <TableCell>{row.codeCity}</TableCell>
      <TableCell>{row.phoneNumber}</TableCell>
      <TableCell>{row.fax}</TableCell>
    </TableRow>
  ));

  const onAdd = (values: IContact) => {
    console.log(values)
    contacts.addContact({id: uuid(), ...values})
    setAddActive(false)
  }

  return (
    <>
      <SimpleTable
        header={
          <TableRow>
            <TableCell>Код города</TableCell>
            <TableCell>Номер телефона</TableCell>
            <TableCell>Факс</TableCell>
          </TableRow>
        }
        body={body}
      />
      <AddContactForm submit={onAdd} visible={addActive} onClose={() => setActiveModal(false)} />
      <Fab color="primary" aria-label="add" onClick={() => setAddActive(true)}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default ContactTable;
