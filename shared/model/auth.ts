export type LoginRequest = {
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    token: string;
}