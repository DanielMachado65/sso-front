import React from 'react'
import { Route } from 'react-router-dom'

import Login from './screens/login'

const Routes = (props) => {
  return (
    <>
      <Route exact path="/" children={<Login />} />
    </>
  )
}

export default Routes;