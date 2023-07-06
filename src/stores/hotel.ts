import { defineStore } from 'pinia'

export interface Hotel {
  id: string
  name: string
  location: string
  rate: number
  phone: string
  website: string
  weekdayPrice: number[]
  weekendPrice: number[]
}
export interface Hotels {
  hotels: Hotel[]
}
const DUMMY_HOTELS = [
  {
    name: 'Hotel A',
    location: 'City A',
    rate: 5,
    phone: '123-456-7890',
    website: 'https://www.hotela.com',
    weekdayPrice: [110, 80],
    weekendPrice: [90, 80]
  },
  {
    name: 'Hotel B',
    location: 'City B',
    rate: 4,
    phone: '987-654-3210',
    website: 'https://www.hotelb.com',
    weekdayPrice: [160, 110],
    weekendPrice: [60, 50]
  },
  {
    name: 'Hotel C',
    location: 'City C',
    rate: 3,
    phone: '555-555-5555',
    website: 'https://www.hotelc.com',
    weekdayPrice: [220, 100],
    weekendPrice: [150, 40]
  }
]

export const useHotelStore = defineStore('hotel', {
  state: (): Hotels => {
    return {
      hotels: DUMMY_HOTELS as Hotel[]
    }
  },
  getters: {
    hotelsDetail: (state: Hotels) => state.hotels
  },
  actions: {
    async getHotels() {
      return this.hotels
    }
  }
})
