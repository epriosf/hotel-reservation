import type { Hotel, HotelCost } from '@/models/hotel/interfaces/Hotel'
import { type HotelProvider } from '@/models/hotel/interfaces/HotelProvider'
import { UserType } from '@/models/hotel/enums/UserType'

export class HotelProducerFromJSON implements HotelProvider {
  async fetchHotels(): Promise<Hotel[]> {
    try {
      const response = await fetch('/hotels.json')
      if (response.ok) {
        return await response.json()
      } else {
        throw new Error(`Failed to load JSON data: ${response.status}`)
      }
    } catch (error) {
      throw new Error('Failed to fetch hotels data')
    }
  }

  getLowestCostHotel(dates: Date[], userType: UserType, hotels: Hotel[] | null): HotelCost {
    const SUNDAY = 0
    const SATURDAY = 6
    if (hotels === null || dates.length === 0) {
      throw new Error('No hotels or dates provided')
    }
    let lowestCost = Infinity
    let lowestCostHotel: Hotel = hotels[0]
    let bestRating = 0

    hotels.forEach((hotel) => {
      let totalCost = 0
      dates.forEach((date) => {
        const isWeekend = date.getDay() === SUNDAY || date.getDay() === SATURDAY
        const price = isWeekend ? hotel.weekendPrice : hotel.weekdayPrice
        const cost = userType === UserType.Regular ? price.regularPrice : price.rewardPrice
        totalCost += cost
      })
      if (totalCost < lowestCost || (totalCost === lowestCost && hotel.rate > bestRating)) {
        lowestCost = totalCost
        lowestCostHotel = hotel
        bestRating = hotel.rate
      }
    })
    return {
      hotel: lowestCostHotel,
      price: lowestCost
    }
  }
}
