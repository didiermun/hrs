import { AxiosResponse } from 'axios';
import { Response } from '../types/global';
import { applicationAxios } from '../plugins/axios';
import { IHotelInfo } from '../types/hotel.type';

class HotelService {
  
    public async getAllPeriods(): Promise<AxiosResponse<Response<IHotelInfo[]>>> {
      return await applicationAxios.get('/hotels');
    }
  
  }
  
  export const hotelService = new HotelService();