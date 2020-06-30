import styled from 'styled-components';

const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-device-height: 568px){
    bottom: 16px;
  }
`;

export default Footer;