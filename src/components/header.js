import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'soil';
import SVGIcon from '../services/SVGIcon';

const Head = styled.div`
  background: #20252B;
  display: block;
`;

const BackLink = styled(Link)`
  color: #FFF !important;
  line-height: 32px;
  padding: 0 16px;  
`;

const SubHeader = styled.div`
  box-shadow: 0px 3px 8px rgba(65, 81, 100, 0.24), 0px 3px 12px rgba(65, 81, 100, 0.12);
  padding: 14px 16px;
  display: flex;
  align-items: center;
`;

const H2 = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  color: #20252B;
  line-height: 100%;
`;

const H2Farmbox = styled(H2)`
  @media only screen and (max-width: 599px){
    display: none;
  }
`;


const Header = ({ from = "/", provider, iconProvider }) => {
  return (
    <>
      <Head>
        <BackLink to={from} className="font-soil label no-text-decoration">
          <Icon icon="fa-chevron-left" /> Voltar para o {provider}
        </BackLink>
      </Head>
      <SubHeader>
        <H2>Configurações da conta</H2>
        <SVGIcon name={{ iconProvider }} viewBox="0 0 28 32" fill={'none'} width="28" height="32" style={{ margin: '0 5px' }} />
        <H2Farmbox>{provider}</H2Farmbox>
      </SubHeader>
    </>
  )
}

export default Header;