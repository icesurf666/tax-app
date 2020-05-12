import React from "react";
import { ListItemIcon, ListItem as MaterialListItem, ListItemText } from "@material-ui/core";

interface IProps {
  icon: React.ReactNode;
  onClick?: () => void;
  title: string;
  className?: string;
}
const ListItem: React.FC<IProps> = ({ icon, onClick, title, className }) => (
  <MaterialListItem className={className} button onClick={onClick}>
  <ListItemIcon>
    {icon}
  </ListItemIcon>
  <ListItemText primary={title} />
</MaterialListItem>
)

export default ListItem
