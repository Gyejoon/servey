import React from 'react';
import styled from 'styled-components';
import Button from '~components/common/Button';

interface LoginProps {}

const LoginBlock = styled.form`
  .form-headline {
  }

  .form-head {
  }
`;

const Login: React.SFC<LoginProps> = () => {
  return (
    <LoginBlock>
      <div className="form-headline">관리자 로그인</div>
      <div className="form-head">
        <form></form>
      </div>
      <div className="bottom">
        <button>로그인</button>
      </div>
    </LoginBlock>
  );
};

export default Login;
