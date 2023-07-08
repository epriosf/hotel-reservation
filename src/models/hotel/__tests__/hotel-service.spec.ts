import { describe, expect, it } from 'vitest'
import { HotelsProducer } from '../HotelProducer/HotelsProducer'
import { UserType } from '../enums/UserType'
import { FormatType } from '../enums/FormatType'

const hotels = [
  {
    id: '1',
    name: 'Lakewood',
    location: 'Miami',
    phone: '123-456-7890',
    website: 'https://www.hoteLakewood.com',
    rate: 3,
    weekdayPrice: {
      regularPrice: 110,
      rewardPrice: 80
    },
    weekendPrice: {
      regularPrice: 90,
      rewardPrice: 80
    }
  },
  {
    id: '2',
    name: 'Bridgewood',
    location: 'Miami',
    phone: '987-654-3210',
    website: 'https://www.hotelBridgewood.com',
    rate: 4,
    weekdayPrice: {
      regularPrice: 160,
      rewardPrice: 110
    },
    weekendPrice: {
      regularPrice: 60,
      rewardPrice: 50
    }
  },
  {
    id: '3',
    name: 'Ridgewood',
    location: 'Miami',
    phone: '987-654-5550',
    website: 'https://www.hotelRidgewood.com',
    rate: 5,
    weekdayPrice: {
      regularPrice: 220,
      rewardPrice: 100
    },
    weekendPrice: {
      regularPrice: 150,
      rewardPrice: 40
    }
  }
]
const rewardUser: UserType = UserType.Reward
const regularUser: UserType = UserType.Regular
const jsonProvider = new HotelsProducer(FormatType.JSON)
describe('Hotel Services tests', () => {
  describe('Get a list of Hotels', () => {
    it('should throw an error when no hotels are fetched', async () => {
      try {
        await jsonProvider.fetchHotels()
        expect(true).toBe(false)
      } catch (error: unknown) {
        expect((error as Error).message).toBe('Failed to fetch hotels data')
      }
    })
  })

  describe('Get lowest cost and hotel or best rated hotel', () => {
    it('should return the lowest cost and hotel for a weekday date and reward user', () => {
      const bookingDates: Date[] = [new Date('2023/07/06')]
      const dates: Date[] = bookingDates
      const bookingPrice = jsonProvider.getLowestCostHotel(dates, rewardUser, hotels)

      expect(bookingPrice).toBeDefined()
      expect(bookingPrice.hotel.name).toBe('Lakewood')
      expect(bookingPrice.price).toBe(80)
    })
    it('should return the lowest cost and hotel for a weekend date and reward user', () => {
      const bookingDates: Date[] = [new Date('2023/07/09')]
      const dates: Date[] = bookingDates

      const bookingPrice = jsonProvider.getLowestCostHotel(dates, rewardUser, hotels)
      expect(bookingPrice).toBeDefined()
      expect(bookingPrice.hotel.name).toBe('Ridgewood')
      expect(bookingPrice.price).toBe(40)
    })
    it('should return the lowest cost and hotel for a weekend date and regular user', () => {
      const bookingDates: Date[] = [new Date('2023/07/09')]
      const dates: Date[] = bookingDates

      const bookingPrice = jsonProvider.getLowestCostHotel(dates, regularUser, hotels)
      expect(bookingPrice).toBeDefined()
      expect(bookingPrice.hotel.name).toBe('Bridgewood')
      expect(bookingPrice.price).toBe(60)
    })
    it('should return the lowest cost and hotel for a weekday date and regular user', () => {
      const bookingDates: Date[] = [new Date('2023/07/07')]
      const dates: Date[] = bookingDates

      const bookingPrice = jsonProvider.getLowestCostHotel(dates, regularUser, hotels)

      expect(bookingPrice).toBeDefined()
      expect(bookingPrice.hotel.name).toBe('Lakewood')
      expect(bookingPrice.price).toBe(110)
    })
    it('should return the lowest and best rate hotel for multiple dates and a reward user', () => {
      const bookingDates: Date[] = [
        new Date('2023/07/07'),
        new Date('2023/07/08'),
        new Date('2023/07/06')
      ]
      const dates: Date[] = bookingDates

      const bookingPrice = jsonProvider.getLowestCostHotel(dates, rewardUser, hotels)

      expect(bookingPrice).toBeDefined()
      expect(bookingPrice.hotel.name).toBe('Ridgewood')
      expect(bookingPrice.price).toBe(240)
    })
    it('should throw an error when no hotels or dates are provided', () => {
      const dates: Date[] = []

      expect(() => {
        jsonProvider.getLowestCostHotel(dates, rewardUser, hotels)
      }).toThrow('No hotels or dates provided')
    })
  })
})
