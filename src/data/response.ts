export interface LoginResponse {
    token: string;
    refresh: string;
    userInfo:UserInfo
}

interface UserInfo {
    email: string;
    id: number;
    name: string;
}