import { defineStore } from 'pinia'
import { createHotels } from '@/services/HotelService'
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
      const hotelsDO = createHotels()
      this.hotels = hotelsDO
      return hotelsDO
    }
  }
})
