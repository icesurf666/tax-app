import React from 'react';
import MaterialTable, { Column, MaterialTableProps } from 'material-table';
import { localization } from './const';

interface IProps<T> extends MaterialTableProps<any> {
  data: T[];
  columns: Array<object>;
  title?: string;
  editable: {
    isEditable?: (rowData: any) => boolean;
    isDeletable?: (rowData: any) => boolean;
    onRowAdd?: (newData: any) => Promise<any>;
    onRowUpdate?: (newData: any, oldData?: any) => Promise<any>;
    onRowDelete?: (oldData: any) => Promise<any>;
  };
}


const Table = <T extends {}>({editable, data, title, columns, ...props}: IProps<T>): JSX.Element => {

  return (
    <MaterialTable
      title={title}
      columns={columns}
      localization={localization}
      data={data}
      editable={editable}
      {...props}
    />
  );
}

export default Table;