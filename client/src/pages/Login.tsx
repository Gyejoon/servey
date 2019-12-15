import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Icon } from 'antd';

interface LoginProps {}

const LoginBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  .container {
    position: relative;
    background-color: #ffffff;
    width: 100%;
    max-width: 400px;
    padding: 16px;
    height: auto;
    overflow: hidden;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);

    .form-headline {
      text-align: center;
      font-size: 36px;
      padding: 16px 32px;
      color: #4a4a4a;
    }

    .login-button {
      width: 100%;
    }
  }
`;

const Login: React.SFC<LoginProps> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <LoginBlock>
      <div className="container">
        <div className="form-headline">관리자 로그인</div>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="아이디"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              로그인
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginBlock>
  );
};

export default Login;
