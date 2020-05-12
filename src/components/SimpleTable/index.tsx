import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import block from 'bem-cn';
import './styles.sass'

interface IProps {
  header: React.ReactNode
  body: React.ReactNode
}

const cls = block('simple-table')

const SimpleTable: React.FC<IProps> = ({header, body}) => {

  return (
    <div className={cls()} >
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          {header}
        </TableHead>
        <TableBody>
          {body}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default SimpleTable