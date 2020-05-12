import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import block from "bem-cn";
import './styles.sass'

const cls = block('menu')

const CustomAppBar: React.FC = () => {
  
  return (
    <AppBar position="static">
      <Toolbar className={cls()}>
        <Typography
          className={cls('title').toString()}
          component={Link}
          to="/"
          noWrap
          variant="h6"
        >
          Сводка
        </Typography>
        <Typography
          className={cls('title').toString()}
          component={Link}
          to="/directory"
          noWrap
          variant="h6"
        >
          Справочники
        </Typography>
        <Typography
          className={cls('title').toString()}
          component={Link}
          to="/all"
          noWrap
          variant="h6"
        >
          Полный список
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
