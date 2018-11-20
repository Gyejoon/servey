// @flow
import React, { type Node } from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core';

import './Login.scss';

type Props = {
  right: Node,
  userMenu: Node,
};

const Login = ({ right, userMenu }: Props) => (
  <Card className="login">
    <div className="login-header">
      <h1>관리자 로그인</h1>
    </div>
    <CardContent className="login-wrapper">
      <form className="login-form">
        <FormControl fullWidth>
          <InputLabel>ID</InputLabel>
          <Input type="text" value="" onChange="" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>PW</InputLabel>
          <Input type="text" value="" onChange="" />
        </FormControl>
      </form>
    </CardContent>
    <CardActions className="login-bottom">
      <Button variant="contained" color="primary" fullWidth>
        LOGIN
      </Button>
    </CardActions>
  </Card>
);

export default Login;
