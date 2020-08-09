import { Form, Input, Card, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { span: 16 },
};

const Login = () => {
  return (
    <Style>
      <Card title="LOGIN">
        <Form {...layout} {...tailLayout}>
          <Form.Item
            label="아이디"
            name="username"
            rules={[
              {
                required: true,
                message: '아이디를 입력해주세요.',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="아이디" />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세요.',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="비밀번호"
            />
          </Form.Item>
        </Form>

        <Button type="primary">로그인</Button>
      </Card>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;

  button {
    width: 100%;
  }
`;

export default Login;
