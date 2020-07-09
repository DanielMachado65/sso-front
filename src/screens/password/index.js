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
        setMessages(['A senha e a confirmação não são as mesmas'])
    else
      setMessages(['Usuário inválido'])
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
            <div className="flex justify-content-center">
              <span className="font-soil h2 mt-8 mb-8">Esqueci a senha</span>
            </div>
            <Toast
              messages={messages}
              type={status.type}
              icon={status.icon}
              style={{ position: 'initial', height: '100%' }} />
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
                  style={{ marginTop: '12px' }} />
            }
            <div className="flex">
              <span className="font-soil information" style={{color: '#798AA4'}}>Vamos mandar um email para o seu email com as instruções para recuperar a conta.</span>
            </div>

            <ButtonSubmit type="secondary" text="Recuperar a senha" onClick={_onSubmit} />
          </Form>
          <div className="flex justify-content-center mt-8">
            <Button type="link borderless" text="Cancelar" onClick={backNavigation} />
          </div>
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
  margin-top: 16px;

  display: center;
  justify-content: center;
`;

export default Password;