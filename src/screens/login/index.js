import React, { useState } from 'react'

import styled from 'styled-components'
import { Button, Input } from 'soil'
import SVGIcon from '../../services/SVGIcon';

const Content = styled.div`
  font-size: 14px;
  color: #333;
  background-color: #fff;
  padding: 0px !important;
  margin: 0;
  background: #FFFFFF;
  font-family: 'Roboto', sans-serif!important;
  -webkit-font-smoothing: antialiased;
`;

const Card = styled.div`
  width: 320px;
  margin: 0 auto;
  position: absolute;
  top: calc(50% - 53px);
  left: 50%;
  transform: translate(-50%, -50%);
  
  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.23), 0px 30px 80px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  padding: 24px 32px 24px 32px;
  
  vertical-align: top;
  height: 448px;
  box-sizing: border-box;
`;

const Form = styled.form``;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-center: center;

  padding: 8px 0 24px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-device-height: 568px){
    bottom: 16px;
  }
`;

const ButtonSubmit = styled(Button)`
  width: 100%;
  margin-top: 24px;

  display: center;
  justify-content: center;
`;

const ButtonOutlined = styled(Button)`
  padding: 8px 0px 0px 0px;
  margin-bottom: 24px;
`;

const InputLogin = styled(Input)`
  margin-top: 16px;
  background: red;
`;

const InputPassword = styled(Input)`
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Login = () => {

  const [visible, setVisible] = useState(false);

  const _onForgetPassword = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Content>
        <Card>
          <Logo>
            <SVGIcon width="149" height="48" name={'farmbox-logo-with-writes'} fill={'none'} />
          </Logo>
          <Form>
            <InputLogin name="username" label="Usuário" type="text" text="label" />
            <InputPassword
              name="password"
              label="senha"
              text="senha"
              type={visible ? 'text' : 'password'}
              rightIcon={visible ? 'fa-eye' : 'fa-eye-slash'}
              onClick={_onForgetPassword} />
            <ButtonOutlined type="link borderless forgot-pass" text="Esqueci a senha" />
            <Input type="checkbox" text="Lembrar de mim?" />
            <ButtonSubmit type="primary" text="Entrar" href="/" target="_blank" />
          </Form>
        </Card>
      </Content>
      <Footer>
        <SVGIcon name={'farmbox-logo-footer'} fill={'none'} width="80" height="53" />
      </Footer>
    </>
  )
}


export default Login;


