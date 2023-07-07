import { Hotel } from '@/models/hotel/Hotel'
export class HotelFactory {
  createHotel(
    id: string,
    name: string,
    location: string,
    phone: string,
    website: string,
    rate: number,
    weekdayPrice: number[],
    weekendPrice: number[]
  ): Hotel {
    return new Hotel(id, name, location, phone, website, rate, weekdayPrice, weekendPrice)
  }
}
