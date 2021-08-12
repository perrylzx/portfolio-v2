import React from 'react';
import styled from 'styled-components';

import { Form, Input, Button } from 'antd';

const ContactSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e8dd;
  height: 100vh;
  width: 100%;
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer id='contact-section'>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label='Full Name'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Credit Card #'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ContactSectionContainer>
  );
};

export default ContactSection;
