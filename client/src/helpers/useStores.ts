import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import AuthStore from '~stores/AuthStore';

interface Store {
  authStore: AuthStore;
}

export default function useStores(): Store {
  return React.useContext<Store>(MobXProviderContext);
}
