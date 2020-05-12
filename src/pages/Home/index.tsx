import React, { useState } from "react";
import SimpleTable from "components/SimpleTable";
import { TableRow, TableCell, Fab, Paper, Grid } from "@material-ui/core";
import useInfoStore from "hooks/useInfo";
import { observer } from "mobx-react";
import { getName } from "utils/getName";
import useRegionsStore from "hooks/useRegions";
import useTypeOfAddressStore from "hooks/useTypeOfAddress";
import useAreas from "hooks/useAreas";
import useStreetsStore from "hooks/useStreets";
import useCitiesStore from "hooks/useCities";
import useUlStore from "hooks/useUls";
import InfoModal from "widgets/InfoModal";

const FullInfo: React.FC = observer(() => {
  const { getInfo } = useInfoStore();
  const { regions } = useRegionsStore();
  const { typeOfAddresses } = useTypeOfAddressStore();
  const { areas } = useAreas();
  const { streets } = useStreetsStore();
  const { cities } = useCitiesStore();


  const body = getInfo.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{getName(row.typeOfAddresId, typeOfAddresses)}</TableCell>
          <TableCell>{row.dateOfStart}</TableCell>
          <TableCell>{row.dateOfEnd}</TableCell>
          <TableCell>
            {`${row.zip},
         ${getName(row.regionId, regions)},
         ${getName(row.cityId, cities)},
         ${getName(row.areaId, areas)},
         ${getName(row.streetId, streets)},
         ${row.numberBuild}, ${row.kv} `}
          </TableCell>
        </TableRow>
      ))

  return (
    <Grid xs={12}>
      <SimpleTable
        header={
          <TableRow>
            <TableCell>Вид адреса</TableCell>
            <TableCell>Дата начала</TableCell>
            <TableCell>Дата окончания</TableCell>
            <TableCell>Адрес</TableCell>
          </TableRow>
        }
        body={body}
      />
      </Grid>
  );
})

export default FullInfo;
