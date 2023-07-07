import { HotelFactory } from '@/models/hotel/HotelFactory'
import type { Hotel } from '@/models/hotel/Hotel'
import { BridgewoodHotel } from '@/models/hotel/hotelTypes/BridgewoodHotel'

export class BridgewoodHotelFactory extends HotelFactory {
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
    return new BridgewoodHotel(id, name, location, phone, website, rate, weekdayPrice, weekendPrice)
  }
}
