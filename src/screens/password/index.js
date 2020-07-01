import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

import SVGIcon from '../../services/SVGIcon';
import { Footer, Content, Card, Logo } from '../../components';
import { Input, Button, Toast } from 'soil';
import { passwordRecovered } from '../../services/user';

const Password = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState({ type: 'error', icon: 'fa-times' });

  const _onHandleChange = e => setUser({ ...user, [e.target.name]: e.target.value })
  const backNavigation = () => history.goBack();

  const _onSubmit = e => {
    e.preventDefault();
    if (user.username)
      passwordRecovered({
        user: {
          username: user.username,
          commit: "Enviar as instruções por e-mails",
        }
      }).then(resp => {
        setStatus({ type: 'success', icon: 'fa-check' })
        setMessages(['Dentro de alguns minutos você irá receber um e-mail'])
      }).catch(e => {
        const { errors, error } = e.response.data;
        if (errors)
          Object.keys(errors).map(e => setMessages([...messages, ...errors[e]]))
        else if (error)
          setMessages([...messages, error])
        else
          setMessages([...messages, 'Aconteceu alguma coisa no servidor'])
      })
    else
      setMessages([...messages, 'preencha os dados corretamente'])
  }

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
            <Toast
              messages={messages}
              type={status.type}
              icon={status.icon}
              style={{ position: 'initial', height: '100%' }} />

            <label>Por favor preencha como o username uma vez passado para você</label>
            <Input
              name="username"
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

const Form = styled.div``;

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