import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../context/state'

import { Content, Header, Card } from '../../components'
import { Row, Col } from 'react-bootstrap';
import { Button, Input, Icon } from 'soil';

const CardMain = styled(Card)`
  max-width: 600px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  padding: 32px;
  transform: none;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1),
   0px 30px 80px rgba(0, 0, 0, 0.06);

  @media only screen and (max-width: 599px){
    box-shadow: none;
  }
`;

const SubCard = styled.div`
  background: #FFF;
  box-shadow: 0px 2px 1px 0px rgba(65, 81, 100, 0.15);
  -moz-box-shadow: 0px 2px 1px 0px rgba(65, 81, 100, 0.15);
  -webkit-box-shadow: 0px 2px 1px 0px rgba(65, 81, 100, 0.15);
  border-radius: 8px;
  border: 1px solid #E7E8EF;
  padding: 16px;
  margin-left: -15px;
  margin-right: -15px;
`;

const SubCardExtraPadding = styled(SubCard)`
  padding: 16px 32px;

  .input-default > div {
    input {
      height: 32px;
    }

    i {
      font-size: 12px;
    }
  }
`;

const MainTitle = styled.h2`
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  color: #415164;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #627389;
  margin: 0px 0px 16px;
`;

const SubTitle = styled.span`
  color: #415164;
  margin-bottom: 24px;
  display: flex;
`;

const Edit = () => {
  const [{ user }, dispatch] = useStateValue();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);

  const _onVisiblePassword = () => setVisible(!visible);

  useEffect(() => {
    let json = localStorage.getItem('__user');
    const userData = JSON.parse(json);
    console.log(userData);
    if (userData)
      dispatch({ type: 'change_user', payload: userData })
  }, [])

  const passwordRecovered = e => {
    e.preventDefault();
  }


  return (
    <>
      <Header
        from={'/'}
        provider={'Farmbox'}
        iconProvider='default' />
      <Content>
        <div>
          <MainTitle>Gerenciar Conta</MainTitle>
          <CardMain>
            <Row>
              <Col md={6} xs={12} className="col-mb-24">
                <Title><Icon icon="fa-user" style={{ marginRight: '8px' }} />Informações Pessoais</Title>
                <SubTitle>Informações básicas, como seu nome e foto, usadas no Farmbox.</SubTitle>
                <Input
                  name="name"
                  label="Nome de exibição"
                  type="type"
                  style={{ marginTop: '16px', width: '190px', fontSize: '12px' }} />
                <Input
                  name="telephone"
                  label="Telefone"
                  type="type"
                  style={{ marginTop: '16px', width: '140px', fontSize: '12px' }} />
              </Col>
              <Col md={6} xs={12} className="col-mb-24">
                <Title><Icon icon='fa-lock' style={{ marginRight: '8px' }} />Acesso e Segurança</Title>
                <SubTitle>Configurações para ajudar você a manter sua conta segura.</SubTitle>

                <SubCard>
                  <div className="mb-16">
                    <span className="font-soil label block">Usuário</span>
                    <span className="font-soil information block">{user ? user.name : ''}</span>
                  </div>
                  <div className="mb-16">
                    <span className="font-soil label block">Email</span>
                    <span className="font-soil information block">{user ? user.email : ''}</span>
                  </div>
                  <div className="mb-16">
                    <span className="font-soil label block">Senha</span>
                    <span className="font-soil information block"><i className="fa fa-key" style={{ color: '#798AA4'}}></i> *******</span>
                  </div>
                  <div className="flex justify-content-center">
                    <Button type="link borderless" text="Editar" rightIcon="fa-pencil" />
                  </div>
                </SubCard>

                <SubCardExtraPadding>
                  <span className="font-soil h2 flex justify-content-center mb-16">Editar Acesso</span>
                  <span className="flex font-soil subtitle mb-8" style={{lineHeight: '100%'}}>Email de recuperação enviado!</span>
                  <Input
                    name="password"
                    label="Senha atual"
                    type={visible ? 'text' : 'password'}
                    leftIcon={'fa-key'}
                    rightIcon={visible ? 'fa-eye-slash' : 'fa-eye'}
                    errorMessage={error ? 'Senha incorreta.' : ''}
                    onClick={_onVisiblePassword}
                    style={{ fontSize: '12px' }} />
                  
                  <Button
                    type="link borderless minor mb-8"
                    text="Esqueci a senha" />

                  <div className="flex justify-content-center">
                    <Button
                      type="secondary mb-8"
                      text="Confirmar" />
                  </div>

                  <div className="flex justify-content-center">
                    <Button
                      type="link borderless"
                      text="Cancelar" />
                  </div>
                </SubCardExtraPadding>

                <SubCardExtraPadding>
                  <span className="font-soil h2 flex justify-content-center mb-16">Esqueci a senha</span>
                  <Input
                    name="name"
                    label="Usuário ou email"
                    type="type"
                    style={{ fontSize: '12px' }} />

                  <span className="flex font-soil subtitle" style={{lineHeight: '100%'}}>Vamos mandar um email para o seu email com as instruções.</span>

                  <div className="flex justify-content-center">
                    <Button
                      type="secondary mb-8"
                      text="Recuperar a senha" />
                  </div>

                  <div className="flex justify-content-center">
                    <Button
                      type="link borderless"
                      text="Cancelar" />
                  </div>
                </SubCardExtraPadding>

                <SubCard>
                  <Input
                    name="name"
                    label="Usuário"
                    type="type"
                    style={{ marginTop: '16px', width: '190px', fontSize: '12px' }} />
                  <Input
                    name="name"
                    label="Email"
                    type="type"
                    style={{ marginTop: '16px', width: '190px', fontSize: '12px' }} />
                  <Input
                    name="password"
                    label="Nova senha"
                    type={visible ? 'text' : 'password'}
                    rightIcon={visible ? 'fa-eye-slash' : 'fa-eye'}
                    errorMessage={error ? 'Senha incorreta.' : ''}
                    onClick={_onVisiblePassword}
                    style={{ fontSize: '12px' }} />
                  <Input
                    name="password"
                    label="Nova senha"
                    type={visible ? 'text' : 'password'}
                    rightIcon={visible ? 'fa-eye-slash' : 'fa-eye'}
                    errorMessage={error ? 'Senha incorreta.' : ''}
                    onClick={_onVisiblePassword}
                    style={{ fontSize: '12px' }} />

                  <div className="flex justify-content-center">
                    <Button type="secondary" text="Confirmar" />
                  </div>
                </SubCard>

              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12}>
                <div className="flex">
                  <Button text="Salvar" type="primary mr-8" />
                  <Button type="link borderless forgot-pass" text="Cancelar" />
                </div>
              </Col>
            </Row>
          </CardMain>
        </div>
      </Content>
    </>
  )
}

export default Edit;