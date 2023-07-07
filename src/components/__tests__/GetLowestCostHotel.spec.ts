import { describe, it, expect } from 'vitest'
import { getHotels, getLowestCostHotelWithBestRating } from '../../models/hotel/HotelService'
describe('Hotel Services tests', () => {
  describe('Get a list of Hotels', () => {
    it('Return the list of hotels with the correct properties', () => {
      // Call the method
      const hotels = getHotels()

      // Perform assertions
      expect(hotels).toBeDefined()
      expect(hotels).toHaveLength(3)

      // Assert the properties of each hotel object in the list
      for (const hotel of hotels) {
        expect(hotel.id).toBeDefined()
        expect(hotel.name).toBeDefined()
        expect(hotel.location).toBeDefined()
        expect(hotel.phone).toBeDefined()
        expect(hotel.website).toBeDefined()
        expect(hotel.rate).toBeDefined()
        expect(hotel.weekdayPrice).toBeDefined()
        expect(hotel.weekendPrice).toBeDefined()
      }
    })
  })

  describe('Get lowest cost and hotel or best rated hotel', () => {
    it('should return the lowest cost and hotel for a weekday date and reward user', () => {
      //Test setup
      const bookingDates: Date[] = [new Date('2023-07-06')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'reward'

      //Call the method
      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      //Perform assertions
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Lakewood')
      expect(cost).toBe(80)
    })
    it('should return the lowest cost and hotel for a weekend date and reward user', () => {
      //Test setup
      const bookingDates: Date[] = [new Date('2023-07-09')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'reward'

      //Call the method
      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)
      //Perform assertions
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Ridgewood')
      expect(cost).toBe(40)
    })
    it('should return the lowest cost and hotel for a weekend date and regular user', () => {
      //Test setup
      const bookingDates: Date[] = [new Date('2023-07-09')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'regular'

      //Call the method
      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)
      //Perform assertions
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Bridgewood')
      expect(cost).toBe(60)
    })
    it('should return the lowest cost and hotel for a weekday date and regular user', () => {
      //Test setup
      const bookingDates: Date[] = [new Date('2023-07-07')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'regular'

      //Call the method
      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      //Perform assertions
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Lakewood')
      expect(cost).toBe(110)
    })
    it('should return the lowest and best rate hotel for multiple dates and a reward user', () => {
      //Test setup
      const bookingDates: Date[] = [new Date('2023-07-07'), new Date('2023-07-08')]
      const dates: Date[] = bookingDates
      const userType: 'reward' | 'regular' = 'reward'

      //Call the method
      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      //Perform assertions
      expect(hotel).toBeDefined()
      expect(hotel?.name).toBe('Lakewood')
      expect(cost).toBe(160)
    })
    it('should return undefined hotel and Infinity cost when no dates are provided', () => {
      //Test setup
      const dates: Date[] = []
      const userType: 'reward' | 'regular' = 'reward'

      //Call the method
      const [hotel, cost] = getLowestCostHotelWithBestRating(dates, userType)

      //Perform assertions
      expect(hotel).toBeUndefined()
      expect(cost).toBe(Infinity)
    })
  })
})
