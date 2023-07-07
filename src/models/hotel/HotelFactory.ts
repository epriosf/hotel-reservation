import type { Hotel } from '@/models/hotel/Hotel'
export abstract class HotelFactory {
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
    throw new Error('Implements createHotel method in subclasses')
  }
}
