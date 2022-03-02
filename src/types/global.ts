export interface LoginRes {
    username: string;
    token: string;
}

export interface LoginInfo {
    username: string;
    password: string;
}

export interface Link{
    name: string;
    to: string;
}

export interface Response<T = unknown> {
    academy: any;
    data: T;
    message: string;
    status: string;
    timestamp: string;
    error?: string;
}