export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdatePassword{
    old_password: string;
    new_password: string;
    confirm_password: string;
}

export interface UpdateUser{
    email: string;
    first_name: string;
    last_name: string;
    username: string;
}