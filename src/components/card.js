import styled from 'styled-components';

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

export default Card;