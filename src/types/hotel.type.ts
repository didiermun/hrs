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

export interface CreateRoom {
    name: string;
    description: string;
    primary_photo: string;
    other_photos: string[];
    hotel_id: number;
}

export interface CreateHotel{
    name: string;
    description: string;
    primary_photo: string;
    other_photos: string[];
    owner_id: number;
}