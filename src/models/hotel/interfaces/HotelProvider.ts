import type { Hotel, HotelCost } from '@/models/hotel/interfaces/Hotel'
import { UserType } from '@/models/hotel/enums/UserType'

export interface HotelProvider {
  fetchHotels(): Promise<Hotel[]>
  getLowestCostHotel(dates: Date[], userType: UserType, hotels: Hotel[] | null): HotelCost
}
