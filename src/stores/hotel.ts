import { defineStore } from 'pinia'
import { getHotels } from '@/models/hotel/HotelService'
import type { HotelInfo } from '@/interfaces/HotelInfo'
export const useHotelStore = defineStore('hotel', {
  state: (): { hotels: HotelInfo[] } => {
    return {
      hotels: [] as HotelInfo[]
    }
  },
  getters: {
    hotelsDetail: (state) => state.hotels
  },
  actions: {
    getHotels() {
      const hotelsDO = getHotels()
      this.hotels = hotelsDO
      return hotelsDO
    }
  }
})
