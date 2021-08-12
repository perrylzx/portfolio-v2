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
        <Menu.Item>Perry</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
      </Menu>
    </Affix>
  );
};

export default Navbar;
