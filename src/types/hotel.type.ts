import { User } from "./user.type";

export interface IHotelInfo {
    id: number;
    name: string;
    owner: User;
}

export interface Room {
    id: number;
    name: string;
    hotel: IHotelInfo;
    created_at: string;
    updated_at: string;
}