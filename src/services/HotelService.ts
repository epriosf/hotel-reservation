import { BridgewoodHotelFactory } from '@/models/hotel/factories/BridgewoodHotelFactory'
import { LakewoodHotelFactory } from '@/models/hotel/factories/LakewoodHotelFactory'
import type { Hotel } from '@/models/hotel/Hotel'
import type { HotelInfo } from '@/interfaces/HotelInfo'
import { RidgewoodHotelFactory } from '@/models/hotel/factories/RidgewoodHotelFactory'
export const createHotels = (): HotelInfo[] => {
  const bridgewoodHotelFactory = new BridgewoodHotelFactory()
  const bridgewoodHotel: Hotel = bridgewoodHotelFactory.createHotel(
    '1',
    'Lakewood',
    'Miami',
    '123-456-7890',
    'https://www.hoteLakewood.com',
    5,
    [110, 80],
    [90, 80]
  )

  const lakewoodHotelFactory = new LakewoodHotelFactory()
  const lakewoodHotel = lakewoodHotelFactory.createHotel(
    '2',
    'Bridgewood',
    'Miami',
    '987-654-3210',
    'https://www.hotelBridgewood.com',
    4,
    [160, 110],
    [60, 50]
  )
  const ridgewoodHotelFactory = new RidgewoodHotelFactory()
  const ridgewoodHotel = ridgewoodHotelFactory.createHotel(
    '3',
    'Ridgewood',
    'Miami',
    '987-654-3210',
    'https://www.hotelRidgewood.com',
    4,
    [220, 100],
    [150, 40]
  )
  const hotels: Hotel[] = [bridgewoodHotel, lakewoodHotel, ridgewoodHotel]

  return hotels.map(({ id, name, location, phone, website, rate, weekdayPrice, weekendPrice }) => ({
    id,
    name,
    location,
    phone,
    website,
    rate,
    weekdayPrice,
    weekendPrice
  }))
}
