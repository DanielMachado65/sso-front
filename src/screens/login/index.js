import React from 'react'
import styled from 'styled-components'

import {Button, Input} from 'soil'

const Content = styled.div`

`;

const LoginForm = styled.div`

`;

const Login = () => {
  return (
    <Content>
      <LoginForm>
        <div className="login-logo"><span>logo</span></div>
        <div className="form">
          <form>
            <Input type="switch" text="label" />
            <Input placeholder="password" type="password"/>
            <Button type="primary" text="Entrar" />
          </form>
        </div>
      </LoginForm>
    </Content>
  )
}


export default Login;