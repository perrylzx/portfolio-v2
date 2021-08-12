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
          <a href='#about-section'>Perry</a>
        </Menu.Item>
        <Menu.Item>
          <a href='#projects-section'>Projects</a>
        </Menu.Item>
        <Menu.Item>
          <a href='#contact-section'>Contact</a>
        </Menu.Item>
      </Menu>
    </Affix>
  );
};

export default Navbar;
