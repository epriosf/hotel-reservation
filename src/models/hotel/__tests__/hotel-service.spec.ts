import { describe, it, expect } from 'vitest'
import { getHotels, getLowestCostHotelWithBestRating } from '../HotelService'
describe('Hotel Services tests', () => {
  describe('Get a list of Hotels', () => {
    it('should return the list of hotels with the correct properties', () => {
      const hotels = getHotels()
      expect(hotels).toHaveLength(3)

      hotels.forEach((hotel) => {
        expect(hotel).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          location: expect.any(String),
          phone: expect.any(String),
          website: expect.any(String),
          rate: expect.any(Number),
          weekdayPrice: expect.arrayContaining([expect.any(Number)]),
          weekendPrice: expect.arrayContaining([expect.any(Number)])
        })
      })
    })
  })

  describe('Get lowest cost and hotel or best rated hotel', () => {
    it('should return the lowest cost and hotel for a weekday date and reward user', () => {
      const bookingDates: Date[] = [new Date('2023/07/06')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'reward'

      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Lakewood')
      expect(cost).toBe(80)
    })
    it('should return the lowest cost and hotel for a weekend date and reward user', () => {
      const bookingDates: Date[] = [new Date('2023/07/09')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'reward'

      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Ridgewood')
      expect(cost).toBe(40)
    })
    it('should return the lowest cost and hotel for a weekend date and regular user', () => {
      const bookingDates: Date[] = [new Date('2023/07/09')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'regular'

      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Bridgewood')
      expect(cost).toBe(60)
    })
    it('should return the lowest cost and hotel for a weekday date and regular user', () => {
      const bookingDates: Date[] = [new Date('2023/07/07')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'regular'

      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Lakewood')
      expect(cost).toBe(110)
    })
    it('should return the lowest and best rate hotel for multiple dates and a reward user', () => {
      const bookingDates: Date[] = [
        new Date('2023/07/07'),
        new Date('2023/07/08'),
        new Date('2023/07/06')
      ]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'reward'

      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Ridgewood')
      expect(cost).toBe(240)
    })
    it('should return undefined hotel and Infinity cost when no dates are provided', () => {
      const dates: Date[] = []
      const userType: 'reward' | 'regular' = 'reward'

      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      expect(hotel).toBeUndefined()
      expect(cost).toBe(Infinity)
    })
  })
})
