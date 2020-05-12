import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeIcon from '@material-ui/icons/Home';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import DomainIcon from '@material-ui/icons/Domain';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';

import SubHeader from './components/SubHeader';
import ListItem from './components/ListItem';
import CityTable from 'components/CityTable';
import block from 'bem-cn';
import './styles.sass'
import RegionTable from 'components/RegionTable';
import LocalityTable from 'components/LocalityTable';
import AreaTable from 'components/AreaTable';
import StreetTable from 'components/StreetTable';
import TypeOfAddressTable from 'components/TypeOfAddressTable';

const cls = block('directory-wrapper')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

const items = [
  {title: 'Регион', icon: <LocationCityIcon />, name: 'region'},
  {title: 'Город', icon: <EmojiTransportationIcon />, name: 'city'},
  {title: 'Населенный пункт', icon: <HomeIcon />, name: 'locality'},
  {title: 'Район', icon: <DomainIcon />, name: 'area'},
  {title: 'Улица', icon: <EmojiTransportationIcon />, name: 'street'},
  {title: 'Вид адреса', icon: <LocalConvenienceStoreIcon />, name: 'typeofaddress'},
]

export default function NestedList() {
  const classes = useStyles();

  const [selected, setSelected] = useState<string>('region')

  const handleClick = (name: string) => {
    setSelected(name)
  }

  return (
    <div className={cls()}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<SubHeader />}
      className={classes.root}
    >
      {items.map(({title, icon, name}) => <ListItem title={title} icon={icon} onClick={() => handleClick(name)} />)}
    </List>
    { selected === 'city' && <CityTable /> }
    { selected === 'region' && <RegionTable /> }
    { selected === 'locality' && <LocalityTable /> }
    { selected === 'area' && <AreaTable /> }
    { selected === 'street' && <StreetTable /> }
    { selected === 'typeofaddress' && <TypeOfAddressTable />}
    </div>
  );
}