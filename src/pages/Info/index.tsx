import React, { useState, useCallback } from "react";
import Table from "../../components/Table";
import { observer } from "mobx-react";
import useUlStore from "hooks/useUls";
import uuid from "uuid/v4";
import block from "bem-cn";
import InfoTable from "components/InfoTable";
import { Grid, Button } from "@material-ui/core";
import "./styles.sass";
import InfoModal from "widgets/InfoModal";
import useInfoStore from "hooks/useInfo";
import { Form } from "react-final-form";
import TextField from "components/Inputs/TextField";
import CheckboxField from "components/Inputs/CheckboxField";
import { runInAction } from "mobx";

interface IValues {
  date: string;
  isSelected: boolean;
}

const cls = block("info-wrap");
const Home: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  console.log(selectedRow);
  const ul = useUlStore();
  const info = useInfoStore();
  const columns = [
      { title: "ИНН", field: "inn", type: "numeric" },
      { title: "ОГРН", field: "orgn", type: "numeric" },
      { title: "КПП", field: "Kpp", type: "numeric" },
    ]

  const onAddInfo = () => {
    ul.addSelectId(selectedRow);
    setVisible(true);
  };

  const onDateSearch = useCallback(({ date, isSelected }: IValues) => {
    console.log(isSelected);
    runInAction(() => {
      info.addSelectedDate(date);
      info.switchIsSelected(isSelected);
    });
  }, []);

  const addAddress = (values: IInfo) => {
    info.addInfo({ id: uuid(), UlId: ul.selectId, ...values })
    setVisible(false)
  }

  return (
    <div>
      <Form
        onSubmit={onDateSearch}
        render={({ handleSubmit }) => (
          <Grid container alignItems="flex-end" style={{ marginBottom: 20 }}>
            <Grid item xs={2}>
              <TextField name="date" type="date" />
            </Grid>
            <Grid item xs={2}>
              <CheckboxField name="isSelected" label="Учитывать дату" />
            </Grid>
            <Grid item xs={3}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                onClick={handleSubmit}
              >
                Поиск
              </Button>
            </Grid>
          </Grid>
        )}
      />

      <Table
        title="Юридические лица"
        options={{
          // actionsColumnIndex: -1,
          rowStyle: (rowData) => ({
            backgroundColor:
              (ul.selectId || selectedRow) === rowData.id ? "#ffc0cb" : "#FFF",
          }),
        }}
        data={ul.Uls}
        columns={columns}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                ul.addUl({ id: uuid(), ...newData });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  ul.updateUl(newData);
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                ul.removeUl(oldData.id);
              }, 600);
            }),
        }}
        onRowClick={(_event, rowData) => {
          setSelectedRow(rowData.id);
          ul.addSelectId(rowData.id);
        }}
      />
      <Grid className={cls()}>
        <div className={cls('btn').toString()}>
        <Button variant="outlined" color="primary" onClick={onAddInfo}>Добавить</Button>
        </div>
        <InfoTable />
        <InfoModal
          visible={visible}
          submit={addAddress}
          type="add"
          onClose={() => setVisible(false)}
        />
      </Grid>
    </div>
  );
};

export default observer(Home);
