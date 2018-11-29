import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import './Login.scss';

const Login = ({ login, handleChange, handleClick }) => {
  const { id, password } = login;

  return (
    <Card className="login">
      <div className="login-header">
        <h1>관리자 로그인</h1>
      </div>
      <CardContent className="login-wrapper">
        <form className="login-form">
          <FormControl fullWidth>
            <InputLabel>ID</InputLabel>
            <Input value={id} onChange={handleChange} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>PW</InputLabel>
            <Input value={password} onChange={handleChange} />
          </FormControl>
        </form>
      </CardContent>
      <CardActions className="login-bottom">
        <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
          LOGIN
        </Button>
      </CardActions>
    </Card>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func
};

export default Login;
