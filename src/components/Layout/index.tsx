import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CustomAppBar from '../AppBar'
import Home from '../../pages/Home'
import block from 'bem-cn'
import './styles.sass'
import Info from '../../pages/Info'
import Directory from 'pages/Directory'
import FullInfo from '../../pages/Home'

const cls = block('container')

const Layout: React.FC = () => (
    <Router>
    <CustomAppBar />
    <CssBaseline />
    <Container className={cls()}>
      <Route path='/' exact component={Info} />
      <Route path='/directory' component={Directory} />
      <Route path='/all' component={FullInfo} />
    </Container>
    </Router>
  )

export default Layout