import React from 'react'

import { BrowserRouter, Switch } from "react-router-dom"
import Routes from './Routes';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  )
}

export default Main;