import React, { useState } from "react";
import SimpleTable from "components/SimpleTable";
import { TableRow, TableCell, Fab } from "@material-ui/core";
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

const InfoTable: React.FC = observer(() => {
  const { selectId } = useUlStore();
  const { getInfo } = useInfoStore();
  const { regions } = useRegionsStore();
  const { typeOfAddresses } = useTypeOfAddressStore();
  const { areas } = useAreas();
  const { streets } = useStreetsStore();
  const { cities } = useCitiesStore();
  const [visible, setVisible] = useState(false);
  const { updateInfo } = useInfoStore();
  const [fullInfo, setFullInfo] = useState<IInfo>();
  const handleClick = (event: any, row: IInfo) => {
    setVisible(true);
    setFullInfo(row);
  };

  const onUpdate = (values: IInfo) => {
    updateInfo(values)
    setVisible(false)
  }

  const body = getInfo.map((row) => {
    if (row.UlId === selectId) {
      return (
        <TableRow key={row.name} onClick={(event) => handleClick(event, row)}>
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
      );
    }
  });

  return (
    <>
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
      <InfoModal
        type='update'
        submit={onUpdate}
        initialValues={fullInfo}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  );
});

export default InfoTable;
