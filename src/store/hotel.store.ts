import { useMutation, useQuery } from 'react-query';
import { hotelService } from '../services/hotel.service';

class HotelStore {
//   createHotel() {
//     return useMutation(hotelService.createHotel);
//   }

  getAllHotels() {
    return useQuery('Hotels', hotelService.getAllPeriods);
  }
}

export default new HotelStore();
