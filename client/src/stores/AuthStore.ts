import { action, observable } from 'mobx';
import autobind from 'autobind-decorator';
import { LoginRequest, User } from 'shared/model/auth';
import loginService from '~services/auth';
import {
  setStorageItem,
  getStorageItem,
  removeStorageItem,
} from '~helpers/storage';
import { setHeader } from '~services/apiClient';
import { useHistory } from 'react-router';

const ACCESS_TOKEN_KEY = 'accessToken';
const CURRENT_USER_KEY = 'currentUser';

@autobind
class AuthStore {
  initialUser = {
    id: '',
    name: '',
    username: '',
  };
  @observable user: User = this.initialUser;
  @observable isAuthenticated: boolean = !!getStorageItem(ACCESS_TOKEN_KEY);
  @observable errorMsg: string = '';

  @action
  async login(body: LoginRequest) {
    return new Promise(async resolve => {
      try {
        const { data } = await loginService.login(body);
        this.isAuthenticated = true;
        this.errorMsg = '';
        setStorageItem(ACCESS_TOKEN_KEY, data.accessToken);
        await this.checkAuth();
        resolve(data.accessToken);
      } catch ({ response }) {
        this.errorMsg = response.data.msg;
      }
    });
  }

  @action
  async checkAuth() {
    return new Promise(async (resolve, reject) => {
      const token = getStorageItem(ACCESS_TOKEN_KEY);
      if (!token) {
        return reject();
      }

      setHeader(token);
      const { data } = await loginService.me();
      setStorageItem(CURRENT_USER_KEY, JSON.stringify(data));
      this.user = data;
      return resolve(data);
    });
  }

  @action
  currentUser() {
    const user = this.user;
    if (user.id) {
      return user;
    }

    const storageUser = getStorageItem(CURRENT_USER_KEY);

    if (!storageUser) {
      return undefined;
    }

    this.user = JSON.parse(storageUser);
    return this.user;
  }

  @action
  logout() {
    this.user = this.initialUser;
    this.isAuthenticated = false;
    this.errorMsg = '';
    removeStorageItem(ACCESS_TOKEN_KEY);
    removeStorageItem(CURRENT_USER_KEY);
  }
}

export default AuthStore;
