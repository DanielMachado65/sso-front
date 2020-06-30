import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Button, Input } from 'soil'
import SVGIcon from '../../services/SVGIcon';
import { login } from '../../services/user'

import { Footer, Content, Card, Logo } from '../../components';

const Login = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const _onVisiblePassword = () => setVisible(!visible);

  const _onHandleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const passwordRecovered = e => {
    e.preventDefault();
    history.push('/password')
  }

  const _onSubmit = e => {
    e.preventDefault();

    login({ user }).then(resp => {
      debugger
    }).catch(() => setError('Usuário incorreto(s)'))
  }

  return (
    <>
      <Content>
        <Card>
          <Logo>
            <SVGIcon
              width="149"
              height="48"
              name={'farmbox-logo-with-writes'}
              fill={'none'} />
          </Logo>
          <Form>
            <Input
              name="login"
              label="Usuário"
              type="text"
              errorMessage={error}
              onChange={_onHandleChange}
              style={{ marginTop: '16px' }} />
            <Input
              name="password"
              label="Senha"
              type={visible ? 'text' : 'password'}
              rightIcon={visible ? 'fa-eye-slash' : 'fa-eye'}
              errorMessage={error ? 'Senha incorreta(s)' : ''}
              style={{ marginTop: '20px', marginBottom: '5px' }}
              onChange={_onHandleChange}
              onClick={_onVisiblePassword} />

            <ButtonOutlined
              type="link borderless forgot-pass"
              text="Esqueci a senha"
              onClick={passwordRecovered} />

            <Input type="checkbox" text="Lembrar de mim?" />
            <ButtonSubmit type="primary" text="Entrar" onClick={_onSubmit} />
          </Form>
        </Card>
      </Content>
      <Footer>
        <SVGIcon name={'farmbox-logo-footer'} fill={'none'} width="80" height="53" />
      </Footer>
    </>
  )
}


const Form = styled.div``;

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

export default Login;


