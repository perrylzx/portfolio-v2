import { SectionIds } from '../constants';

import React from 'react';
import { Affix, Menu as BaseMenu } from 'antd';
import styled from 'styled-components';

const Menu = styled(BaseMenu)`
  display: flex;
  justify-content: center;
  background-color: #1d263b;
`;

const Navbar = () => {
  return (
    <Affix>
      <Menu mode='horizontal'>
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
};

export default Navbar;
