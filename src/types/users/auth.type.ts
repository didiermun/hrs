export interface IUserSignup extends IUserLogin{
    full_names: string;
}

export interface IUserLogin{
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
    user: IUserSignup;
}

export interface IUser extends IUserSignup{
    createdAt: string;
    updatedAt: string;
    id: string;
}