import { action, observable, reaction } from 'mobx';
import autobind from 'autobind-decorator';
import { LoginRequest } from 'shared/model/auth';
import loginService from '~services/auth';

@autobind
class AuthStore {
  @observable token: string = '';
  @observable username = '';
  @observable password = '';

  @action
  async login() {
    const body: LoginRequest = {
      username: this.username,
      password: this.password,
    };
    try {
      const response = await loginService.login(body);
      this.token = response.data.token;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  setUsername(username: string) {
    this.username = username;
  }

  @action
  setPassword(password: string) {
    this.password = password;
  }

  @action
  resetUsernameAndPassword() {
    this.username = '';
    this.password = '';
  }
}

export default AuthStore;
