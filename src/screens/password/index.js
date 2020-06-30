import React from 'react'
import styled from 'styled-components';

import SVGIcon from '../../services/SVGIcon';
import { Footer, Content, Card, Logo } from '../../components';

const Password = () => {
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
            <label>lorem spidahsdjhgas dashjkashdj basjhcbajhvaskghdv aghs</label>
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

export default Password;