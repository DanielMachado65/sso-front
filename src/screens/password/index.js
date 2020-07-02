import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

import SVGIcon from '../../services/SVGIcon';
import { Footer, Content, Card, Logo } from '../../components';
import { Input, Button, Toast } from 'soil';
import { requestPassword, sendNewPassword } from '../../services/user';

const Password = () => {
  const history = useHistory();
  const token = new URLSearchParams(history.location.search).get("token")

  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState({ type: 'error', icon: 'fa-times' });

  const _onHandleChange = e => setUser({ ...user, [e.target.name]: e.target.value })
  const backNavigation = () => history.push('/');

  const getError = e => {
    const { errors, error } = e.response.data;
    if (errors)
      Object.keys(errors).map(e => setMessages([...messages, ...errors[e]]))
    else if (error)
      setMessages([error])
    else
      setMessages(['¯\\_(ツ)_/¯ Aconteceu alguma coisa no servidor'])
  }

  const _onSubmit = e => {
    e.preventDefault();
    if (user.username)
      requestPassword({ user: { ...user, commit: 'Enviar as instruções por e-mails' } }).then(() => {
        setStatus({ type: 'success', icon: 'fa-check' })
        setMessages(['Dentro de alguns minutos você irá receber um e-mail'])
      }).catch(getError)
    else if (user.confirm_password && user.password)
      if (user.confirm_password === user.password)
        sendNewPassword({
          user: { ...user, reset_password_token: token, commit: 'Mudar a senha' }
        }).then(() => {
          setStatus({ type: 'success', icon: 'fa-check' })
          setMessages(['A senha foi mudada com sucesso'])
          setTimeout(() => history.replace('/'), 2000)
        }).catch(e => getError(e));
      else
        setMessages(['A senha e a confirmação não são as mesma'])
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
            {
              token ?
                <>
                  <Input
                    name="password"
                    label="Senha"
                    type="password"
                    onChange={_onHandleChange}
                    style={{ marginTop: '16px' }} />
                  <Input
                    name="confirm_password"
                    label="Confirmação de Senha"
                    type="password"
                    onChange={_onHandleChange}
                    style={{ marginTop: '16px' }} />
                </>
                : <Input
                  name="username"
                  label="Usuário"
                  type="text"
                  onChange={_onHandleChange}
                  style={{ marginTop: '16px' }} />
            }
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