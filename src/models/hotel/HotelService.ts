import type { Hotel } from '@/models/hotel/Hotel'
import { HotelFactory } from '@/models/hotel/HotelFactory'
export const getHotels = (): Hotel[] => {
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
  return [bridgewoodHotel, lakewoodHotel, ridgewoodHotel]
}

export const getLowestCostHotelWithBestRating = (
  dates: Date[],
  userType: 'reward' | 'regular'
): [Hotel | undefined, number] => {
  const SUNDAY = 0
  const SATURDAY = 6
  const hotels: Hotel[] = getHotels()
  if (dates.length === 0) {
    return [undefined, Infinity]
  }
  let lowestCost = Infinity
  let lowestCostHotel: Hotel | undefined
  let bestRating = 0

  hotels.forEach((hotel) => {
    let totalCost = 0
    dates.forEach((date) => {
      const isWeekend = date.getDay() === SUNDAY || date.getDay() === SATURDAY
      const price = isWeekend ? hotel.weekendPrice : hotel.weekdayPrice
      const cost = userType === 'regular' ? price[0] : price[1]
      totalCost += cost
    })
    if (totalCost < lowestCost || (totalCost === lowestCost && hotel.rate > bestRating)) {
      lowestCost = totalCost
      lowestCostHotel = hotel
      bestRating = hotel.rate
    }
  })
  return [lowestCostHotel, lowestCost]
}
