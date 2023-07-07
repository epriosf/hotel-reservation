import { HotelFactory } from '@/models/hotel/HotelFactory'
import type { Hotel } from '@/models/hotel/Hotel'
import { RidgewoodHotel } from '@/models/hotel/hotelTypes/RidgewoodHotel'

export class RidgewoodHotelFactory extends HotelFactory {
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
    return new RidgewoodHotel(id, name, location, phone, website, rate, weekdayPrice, weekendPrice)
  }
}
