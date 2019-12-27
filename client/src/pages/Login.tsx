import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Icon } from 'antd';
import useStores from '~helpers/useStores';
import { RouteComponentProps } from 'react-router';
import { useObserver } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { LoginRequest } from 'shared/model/auth';

const FormItem = Form.Item;

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
    border-radius: 10px;
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

    .error {
      min-height: 24px;
      text-align: center;
      color: #e85249;
    }

    .login-button {
      width: 100%;
    }
  }
`;

interface LoginProps {}

const Login: React.SFC<LoginProps &
  RouteComponentProps &
  FormComponentProps> = props => {
  const { authStore } = useStores();
  useObserver(() => {
    authStore.errorMsg;
  });
  const { errorMsg } = authStore;
  const { history, form } = props;
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    validateFields(async (err, values: LoginRequest) => {
      if (!err) {
        await authStore.login(values);
        history.push('/');
      }
    });
  };

  return (
    <LoginBlock>
      <div className="container">
        <div className="form-headline">로그인</div>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '아이디를 입력해 주세요.' }],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="아이디"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '패스워드를 입력해 주세요.' }],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="비밀번호"
              />,
            )}
          </FormItem>
          {errorMsg && <div className="error">{errorMsg}</div>}
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-button">
              로그인
            </Button>
          </FormItem>
        </Form>
      </div>
    </LoginBlock>
  );
};

export default Form.create()(Login);
