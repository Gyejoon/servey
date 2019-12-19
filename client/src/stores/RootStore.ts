import AuthStore from './AuthStore';

export default class RootStore {
  static instance: RootStore;

  authStore = new AuthStore();
}
