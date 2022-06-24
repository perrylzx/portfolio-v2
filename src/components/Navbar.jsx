import React from 'react';
import { Affix, Menu as BaseMenu } from 'antd';
import styled from 'styled-components';
import { SectionIds } from '../constants';

const Menu = styled(BaseMenu)`
  display: flex;
  justify-content: end;
  background-color: #1d263b;
  span {
    height: 100%;
  }
  a {
    height: 100%;
  }
`;

const LogoName = styled.a.attrs({ href: `#${SectionIds.MAIN}` })`
  background: linear-gradient(-70deg, #a2facf 0%, #64acff 100%);
  position: absolute;
  top: 6px;
  left: 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
`;

function Navbar() {
  return (
    <Affix>
      <LogoName>SMUGPUG</LogoName>
      <Menu mode="horizontal">
        <Menu.Item>
          <a href={`#${SectionIds.ABOUT}`}>Perry</a>
        </Menu.Item>
        <Menu.Item>
          <a href={`#${SectionIds.PROJECT}`}>Projects</a>
        </Menu.Item>
        <Menu.Item>
          <a href={`#${SectionIds.CONTACT}`}>Contact</a>
        </Menu.Item>
      </Menu>
    </Affix>
  );
}

export default Navbar;
