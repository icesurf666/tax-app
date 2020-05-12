import React from 'react'
import MuiDialog, { DialogProps } from '@material-ui/core/Dialog'
import block from 'bem-cn'
import './styles.sass'

const cls = block('dialog')

interface IProps extends DialogProps {
  size?: 'small' | 'big';
}

const Dialog: React.FC<IProps> = ({ size, ...props }) => (
  <MuiDialog {...props} classes={{ paper: cls('paper', { size }) }} />
)

export default Dialog
