import { HotelFactory } from '@/models/hotel/HotelFactory'
import type { Hotel } from '@/models/hotel/Hotel'
import { LakewoodHotel } from '@/models/hotel/hotelTypes/LakewoodHotel'

export class LakewoodHotelFactory extends HotelFactory {
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
    return new LakewoodHotel(id, name, location, phone, website, rate, weekdayPrice, weekendPrice)
  }
}
