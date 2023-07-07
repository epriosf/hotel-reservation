import type { Hotel } from '@/models/hotel/Hotel'
import type { HotelInfo } from '@/interfaces/HotelInfo'
import { HotelFactory } from '@/models/hotel/HotelFactory'
export const getHotels = (): HotelInfo[] => {
  const hotelFactory = new HotelFactory()
  const bridgewoodHotel: Hotel = hotelFactory.createHotel(
    '1',
    'Lakewood',
    'Miami',
    '123-456-7890',
    'https://www.hoteLakewood.com',
    3,
    [110, 80],
    [90, 80]
  )

  const lakewoodHotel: Hotel = hotelFactory.createHotel(
    '2',
    'Bridgewood',
    'Miami',
    '987-654-3210',
    'https://www.hotelBridgewood.com',
    4,
    [160, 110],
    [60, 50]
  )
  const ridgewoodHotel: Hotel = hotelFactory.createHotel(
    '3',
    'Ridgewood',
    'Miami',
    '987-654-3210',
    'https://www.hotelRidgewood.com',
    5,
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

export const getLowestCostHotelWithBestRating = (
  dates: Date[],
  userType: 'reward' | 'regular'
): [HotelInfo | undefined, number] => {
  const hotels: HotelInfo[] = getHotels()
  if (dates.length === 0) {
    return [undefined, Infinity]
  }
  let lowestCost = Infinity
  let lowestCostHotel: HotelInfo | undefined
  let bestRating = 0
  for (const hotel of hotels) {
    let totalCost = 0
    for (const date of dates) {
      const isWeekend = date.getDay() === 0 || date.getDay() === 6 // Sunday = 0, Saturday = 6
      const price = isWeekend ? hotel.weekendPrice : hotel.weekdayPrice
      const cost = userType === 'regular' ? price[0] : price[1]
      totalCost += cost
    }
    if (totalCost < lowestCost || (totalCost === lowestCost && hotel.rate > bestRating)) {
      lowestCost = totalCost
      lowestCostHotel = hotel
      bestRating = hotel.rate
    }
  }

  return [lowestCostHotel, lowestCost]
}
