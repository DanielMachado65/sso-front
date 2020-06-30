import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

import SVGIcon from '../../services/SVGIcon';
import { Footer, Content, Card, Logo } from '../../components';
import { Input, Button } from 'soil';

const Password = () => {
  const history = useHistory();

  const [user, setUser] = useState(null);
  const _onHandleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const _onSubmit = e => {
    e.preventDefault();
    console.log(user)
  }

  const backNavigation = () => history.goBack()

  return (
    <>
      <Content>
        <Card>
          <Arrow onClick={backNavigation}>Voltar</Arrow>
          <Logo>
            <SVGIcon
              width="149"
              height="48"
              name={'farmbox-logo-with-writes'}
              fill={'none'} />
          </Logo>
          <Form>
            <label>Por favor preencha como o username uma vez passado para você</label>
            <Input
              name="login"
              label="Usuário"
              type="text"
              onChange={_onHandleChange}
              style={{ marginTop: '16px' }} />

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

const Form = styled.div`
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const ButtonSubmit = styled(Button)`
  width: 100%;
  margin-top: 24px;

  display: center;
  justify-content: center;
`;

export default Password;