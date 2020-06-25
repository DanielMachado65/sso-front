import React from 'react'
import { Route } from 'react-router-dom'

import Login from './screens/login'

const Routes = (props) => {
  return (
    <>
      <Route exact path="/sign_in" children={<Login />} />
    </>
  )
}

export default Routes;