export type LoginRequest = {
  username: string;
  password: string;
};

export type AuthenticationResponse = {
  accessToken: string;
};

export interface User {
  id: string;
  name: string;
  username: string;
}
