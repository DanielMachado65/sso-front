import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../context/state'

import { Content, Header, Card } from '../../components'
import { Row, Col } from 'react-bootstrap';
import { Button, Input, Icon } from 'soil';

const CardMain = styled(Card)`
    max-width: 600px;
    width: 100%;

    margin: 0 auto;

    top: calc(50%);

    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1),
     0px 30px 80px rgba(0, 0, 0, 0.06);

    @media only screen and (max-width: 599px){
      box-shadow: none;
    }
`;

const SubCard = styled.div`
  background: #FFF;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 5px;
`;

const MainTitle = styled.h2`
    margin-top: 30px;
    text-align: center;
`;

const Title = styled.h3`

`;

const SubTitle = styled.span`

`;

const Edit = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let json = localStorage.getItem('__user');
    const userData = JSON.parse(json);

    if (userData)
      dispatch({ type: 'change_user', payload: userData })
  }, [])

  return (
    <>
      <Header
        from={'/'}
        provider={'farmbox'}
        iconProvider='default' />
      <Content>
        <MainTitle>Gerenciar a conta</MainTitle>
        <CardMain>
          <Row>
            <Col md={6} xs={12}>
              <Title><Icon icon="fa-user" style={{ marginRight: '8px' }} />Informações Pessoais</Title>
              <SubTitle>Informações básicas, como seu nome e foto, usadas no Farmbox.</SubTitle>
              <Input
                name="name"
                label="Nome de exibição"
                type="type"
                style={{ marginTop: '16px' }} />
              <Input
                name="telephone"
                label="Telefone"
                type="type"
                style={{ marginTop: '16px' }} />
            </Col>
            <Col md={6} xs={12}>
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
                  <span className="font-soil information block"><i className="fa fa-key"></i> *******</span>
                </div>
                <div className="text-center">
                  <Button type="link borderless" text="Editar" rightIcon="fa-pencil" />
                </div>
              </SubCard>
            </Col>
          </Row>
          <Row>
            <Button text="Salvar" type="primary" />
            <Button type="link borderless forgot-pass" text="Cancelar" />
          </Row>
        </CardMain>
      </Content>
    </>
  )
}

export default Edit;