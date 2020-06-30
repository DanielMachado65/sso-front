import React from 'react'
import { Route } from 'react-router-dom'

import Login from './screens/login'
import Edit from './screens/edit'
import Password from './screens/password'

const Routes = (props) => {
  return (
    <>
      <Route exact path="/" children={<Login />} />
      <Route exact path="/edit/" children={<Edit />} />
      <Route exact path="/password" children={<Password />} />
    </>
  )
}

export default Routes;